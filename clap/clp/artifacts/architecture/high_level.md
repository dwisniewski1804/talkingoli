```
flowchart LR
  %% =========================
  %% Client
  %% =========================
  subgraph U["User"]
    Web["Web App (React)"]
    Mic["Microphone"]
  end

  %% =========================
  %% API / Backend (Modular Monolith)
  %% =========================
  subgraph B["API (NestJS) — Modular Monolith"]
    API["API Gateway / BFF"]

    subgraph BC1["Intake BC"]
      Intake["Intake Service\n(CV + Job Offer)"]
      Artifacts["Artifacts Registry\n(file refs + metadata)"]
    end

    subgraph BC2["Matching BC"]
      Match["Match Engine"]
    end

    subgraph BC3["Interview BC"]
      Stage["HR Interview Stage\n(orchestrator)"]
      Prompting["Prompt/Policy Layer"]
    end

    subgraph BC4["Payments BC"]
      Pay["Payment Service"]
    end

    subgraph BC5["Delivery BC"]
      Delivery["Report Generator + Email Sender"]
    end
  end

  %% =========================
  %% Infra
  %% =========================
  subgraph I["Infrastructure"]
    DB[(MongoDB)]
    Queue[(Redis + BullMQ)]
    Storage[(S3 / R2)]
    Stripe["Stripe"]
    Email["Email Provider"]
  end

  %% =========================
  %% AI Providers
  %% =========================
  subgraph A["AI Providers"]
    LLM["LLM (OpenAI)"]
    STT["Speech-to-Text"]
    TTS["Text-to-Speech"]
  end

  %% =========================
  %% User -> API
  %% =========================
  Web -->|HTTPS REST| API
  Mic -->|Audio Input| Web

  %% =========================
  %% Intake (sync + async)
  %% =========================
  API --> Intake
  Intake -->|store files| Storage
  Intake -->|persist metadata| DB
  Intake -->|enqueue job: match.requested| Queue

  %% =========================
  %% Matching (async worker)
  %% =========================
  Queue -->|job: match.requested| Match
  Match -->|call| LLM
  Match -->|persist result| DB
  Match -->|enqueue: match.completed| Queue

  %% =========================
  %% Interview (sync loop, optional STT/TTS)
  %% =========================
  Web -->|start/turn/end| API
  API --> Stage
  Stage --> Prompting
  Prompting -->|call| LLM

  Web -->|user audio| API
  API -->|STT request| STT
  STT -->|transcript| Stage

  Stage -->|TTS request| TTS
  TTS -->|audio stream| Web

  Stage -->|persist transcript/answers| DB
  Stage -->|enqueue: stage.completed| Queue

  %% =========================
  %% Payment (sync + webhook)
  %% =========================
  Stage -->|ready to pay| Pay
  Pay -->|create checkout| Stripe
  Stripe -->|webhook confirm| Pay
  Pay -->|persist payment status| DB
  Pay -->|enqueue: delivery.requested| Queue

  %% =========================
  %% Delivery (async worker)
  %% =========================
  Queue -->|job: delivery.requested| Delivery
  Delivery -->|call| LLM
  Delivery -->|send| Email
  Delivery -->|persist delivery| DB
```
[![](https://mermaid.ink/img/pako:eNqlVutu4kYUfpWRpZVAhUCAJASpK0GS3WUVullgW6mhPwb7AC5mxh2Pw7JxpH2IPmGfpOeMPTaQbAUpP4zn3K_f-NFxpQdOx5kFcu0uuNLsdjgRjL15w37-0S_jXwU-CH2IcBRP54qHC_blfuJ8iUBNnD-IzthvMEUSPlk3DFlpCNzV5Zw78F3k4lPJcCEFZAwQ3kQcGGT3rs9qrMfdJWqx0kB6ccAVG0ghA18vykeF38NoyGDpF4j0x1GZ_fP9b7ZvMo8eJTP591zDmm8okHfvDD-VKAxfnaJoX2i-BDzkJhhLaQVzBOrBd2EyEaWrX9lP7KOcsk-zGajyllJXaX-GlYzIv31nQ5j7kVYb0p35ATAFswhNrEBzj2teWMgLvBNig3rBtbvwxXw3SEO1XHYj5n7eqx8Za6YpUTaw3rU20nxOGX8YskLCEClyqdwFVl9xLXdyvlNyFWoMDTXT99od9sPdsFu-2Zq4l8NpkRbfrHCgo91okFrw8vL_t7Uz1LiGwH8Atdm1ZqkoMIRQ4rq9BwEmGezEzYr7AfoQ3n7Axw19X8wUP2qy-6YdqIWVjV0dqyLF6949ro2Yy-teOSN9jiGGe9xWz6cB6sVBMPhsmSPMhRpYGjVx4IeNgq78kPqavuT2TdJITpPH1j34RfpHrXo_146OSr5La7KtbEO7vR0gC5-s9CkE0e0XAzcajymVEMBdVLWsjuGrzpnj8QiZRCJWKvSKhAgpWfUtAckhGoSi1erb5MN4fDdiw5vROLGqCKGG1Y09X-J4hLFOSP6IiTLoU4o2wsWOc_o_CDsJ_tBzZoAomSkKJ8JRAUZYFCV2bvZEQuwHolYOUgnO454IiL9oHtmfctphK4KgEwVIijR4STqrB-eZ41vJpMjWUi0JWw_QNo5MQC8HYkybZhiUJEGXB0FCU7ZLtjkriOJA24wLfpaw9eEi2AXwimQLdE37GkgZVphEFJWCBzTiNZzk8jGzF2n8hKghfogaTno-f3YKUhQXGcYbUo7bRM4P--XZ9hHTWnCa5H37CYbMspInFL9xhTTi4ZUhIhehh1hpHDuRJJhroYwH4hKNeMYdQ3AEvtranELZ9qzwUsOXNVJt_wrZvH8RkV7fP3sp2a1cw3Qh5fKghhXRYErehmnJQr5JyKZpBH6tmBYgVwPDK9ddythUzoC3sHhupDLHzJVi5qvVMyu2OGEWMOat47wwViovi5ddkq9f4_zy_d9r_FIs1jqJ556e7fMOJzLbYK64ZzxbHesqrYtTcebK95wOXshQcVagUBmPziMZmDh6ASu8RDv46sGMI1BMnIl4QrWQi9-lXFlNJeP5wunMeBDhKQ4RReHa53j1FSLmi-NKxkI7nYuLlrHhdB6dr3isnzQv263GZfuifl4_a11UnI3TOW20TprN1tl5q1FvI7vZfqo434zX-km7Xa83L-tn7cvm-Wmr1Xr6F-Yf0mk?type=png)](https://mermaid.live/edit#pako:eNqlVutu4kYUfpWRpZVAhUCAJASpK0GS3WUVullgW6mhPwb7AC5mxh2Pw7JxpH2IPmGfpOeMPTaQbAUpP4zn3K_f-NFxpQdOx5kFcu0uuNLsdjgRjL15w37-0S_jXwU-CH2IcBRP54qHC_blfuJ8iUBNnD-IzthvMEUSPlk3DFlpCNzV5Zw78F3k4lPJcCEFZAwQ3kQcGGT3rs9qrMfdJWqx0kB6ccAVG0ghA18vykeF38NoyGDpF4j0x1GZ_fP9b7ZvMo8eJTP591zDmm8okHfvDD-VKAxfnaJoX2i-BDzkJhhLaQVzBOrBd2EyEaWrX9lP7KOcsk-zGajyllJXaX-GlYzIv31nQ5j7kVYb0p35ATAFswhNrEBzj2teWMgLvBNig3rBtbvwxXw3SEO1XHYj5n7eqx8Za6YpUTaw3rU20nxOGX8YskLCEClyqdwFVl9xLXdyvlNyFWoMDTXT99od9sPdsFu-2Zq4l8NpkRbfrHCgo91okFrw8vL_t7Uz1LiGwH8Atdm1ZqkoMIRQ4rq9BwEmGezEzYr7AfoQ3n7Axw19X8wUP2qy-6YdqIWVjV0dqyLF6949ro2Yy-teOSN9jiGGe9xWz6cB6sVBMPhsmSPMhRpYGjVx4IeNgq78kPqavuT2TdJITpPH1j34RfpHrXo_146OSr5La7KtbEO7vR0gC5-s9CkE0e0XAzcajymVEMBdVLWsjuGrzpnj8QiZRCJWKvSKhAgpWfUtAckhGoSi1erb5MN4fDdiw5vROLGqCKGG1Y09X-J4hLFOSP6IiTLoU4o2wsWOc_o_CDsJ_tBzZoAomSkKJ8JRAUZYFCV2bvZEQuwHolYOUgnO454IiL9oHtmfctphK4KgEwVIijR4STqrB-eZ41vJpMjWUi0JWw_QNo5MQC8HYkybZhiUJEGXB0FCU7ZLtjkriOJA24wLfpaw9eEi2AXwimQLdE37GkgZVphEFJWCBzTiNZzk8jGzF2n8hKghfogaTno-f3YKUhQXGcYbUo7bRM4P--XZ9hHTWnCa5H37CYbMspInFL9xhTTi4ZUhIhehh1hpHDuRJJhroYwH4hKNeMYdQ3AEvtranELZ9qzwUsOXNVJt_wrZvH8RkV7fP3sp2a1cw3Qh5fKghhXRYErehmnJQr5JyKZpBH6tmBYgVwPDK9ddythUzoC3sHhupDLHzJVi5qvVMyu2OGEWMOat47wwViovi5ddkq9f4_zy_d9r_FIs1jqJ556e7fMOJzLbYK64ZzxbHesqrYtTcebK95wOXshQcVagUBmPziMZmDh6ASu8RDv46sGMI1BMnIl4QrWQi9-lXFlNJeP5wunMeBDhKQ4RReHa53j1FSLmi-NKxkI7nYuLlrHhdB6dr3isnzQv263GZfuifl4_a11UnI3TOW20TprN1tl5q1FvI7vZfqo434zX-km7Xa83L-tn7cvm-Wmr1Xr6F-Yf0mk)