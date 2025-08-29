:root {
    --bg-1: #0b0f14;
    --bg-2: #0e1521;
    --txt: #e6eef7;
    --muted: #9fb3c8;
    --accent: #47d6ff;
    --accent-2: #7a5cff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: var(--txt);
    background: var(--bg-1);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
}

canvas {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.content {
    position: relative;
    z-index: 1;
    max-width: 800px;
}

h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 15px;
}

p {
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.2rem);
    max-width: 600px;
    margin: 0 auto 20px;
}

a.btn, button.btn {
    display: inline-block;
    padding: 12px 24px;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    color: #06101a;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    text-transform: uppercase;
}

a.btn:hover, button.btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(71, 214, 255, 0.4);
}

.fade-in {
    opacity: 0;
    transform: translateY(20px);
}

form input, form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 6px;
    border: 1px solid var(--muted);
    background: var(--bg-2);
    color: var(--txt);
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

form input:focus, form textarea:focus {
    outline: none;
    border-color: var(--accent);
}

.loader {
    position: fixed;
    inset: 0;
    background: var(--bg-1);
    z-index: 10000;
}
