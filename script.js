/* General Styles */
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background: radial-gradient(circle, #f0f0f0, #dcdcdc);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .bubble-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  /* Bubble Styles */
  .bubble {
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 1em;
    text-decoration: none;
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  /* Bubble Sizes */
  .central-bubble {
    width: 200px;
    height: 200px;
    font-size: 1.5em;
  }
  
  .project-bubble {
    width: 100px;
    height: 100px;
  }
  
  /* Bubble Hover Effects */
  .bubble:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
  
  /* Positioning Bubbles */
  .central-bubble {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .project-bubble:nth-child(2) {
    top: 20%;
    left: 40%;
  }
  
  .project-bubble:nth-child(3) {
    top: 60%;
    left: 30%;
  }
  
  .project-bubble:nth-child(4) {
    top: 70%;
    left: 70%;
  }
  