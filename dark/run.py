from fastapi import FastAPI, HTTPException
import subprocess
import uvicorn

app = FastAPI()

def run_dark_pattern(myinput):
    # Format the command with the provided input
    command = f'ollama run dark-pattern {myinput}'

    try:
        # Run the command and capture the output
        output = subprocess.check_output(command, shell=True, text=True)
        
        return output
    except subprocess.CalledProcessError as e:
        # If the command fails, raise an HTTPException
        raise HTTPException(status_code=500, detail=f"Error: {e}")

@app.get("/run-dark-pattern/")
def read_item(myinput: str):
    result = run_dark_pattern(myinput)
    return {"output": result}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
