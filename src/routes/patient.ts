import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getEntries());
});

router.post("/", (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (e: unknown) {
    let errorMsg = "Something went wrong";
    if (e instanceof Error) {
      errorMsg += " Error: " + e.message;
    }
    res.status(400).send(errorMsg);
  }
});

export default router;
