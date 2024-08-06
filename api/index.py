from fastapi import FastAPI, HTTPException
import csv
from jobspy import scrape_jobs
import pandas as pd
import numpy as np

app = FastAPI()

@app.get("/api/python")
def hello_world():
    try:
        jobs = scrape_jobs(
            site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor"],
            search_term="software engineer intern",
            results_wanted=20,
            hours_old=72,  # (only Linkedin/Indeed is hour specific, others round up to days old)
            country_indeed='USA',  # only needed for indeed / glassdoor
        )
        print(f"Found {len(jobs)} jobs")
        print(jobs.head())
        
        # Handle NaN and infinite values
        jobs.replace({np.nan: None, np.inf: None, -np.inf: None}, inplace=True)
        
        jobs.to_csv("jobs.csv", quoting=csv.QUOTE_NONNUMERIC, escapechar="\\", index=False)  # to_excel
        
        # Convert the DataFrame to a list of dictionaries
        jobs_list = jobs.to_dict(orient="records")
        
        return {"jobs": jobs_list}
    except Exception as e:
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=str(e))
