import type { BuildStage } from "./builds";

export const AUTOHUNT_BUILD = {
  source: "https://github.com/Yosf96633/Autohunt",
  stages: [
    {
      title: "Turn the CV into structured context",
      summary:
        "Extract the candidate's experience and skills before matching roles.",
      input: "A resume PDF",
      output: "Validated candidate data",
      explanation:
        "pdfjs-dist extracts the resume text. AutoHunt turns it into structured professional data, including experience, education, skills, and contact information, with Zod schemas checking the expected shape.",
      decision:
        "Later stages need consistent fields rather than repeatedly interpreting raw PDF text. Structured data also makes missing or malformed information easier to inspect.",
      code: "text = extract_pdf(resume)\ncandidate = parse_professional_data(text)\nvalidated = candidate_schema.parse(candidate)",
    },
    {
      title: "Discover candidate roles",
      summary: "Collect job listings for the workflow to evaluate.",
      input: "Candidate context + job-board searches",
      output: "Structured job listings",
      explanation:
        "The workflow gathers listings from multiple job boards and represents their requirements as structured job data. These listings become inputs to the relevance evaluation rather than triggering applications immediately.",
      decision:
        "Separate discovery from application. A listing appearing in search results does not mean it is a suitable role or an approved destination.",
      code: "listings = collect_job_board_results(search)\njobs = validate_job_listings(listings)\nstore_discovered_roles(jobs)",
    },
    {
      title: "Score and filter the matches",
      summary:
        "Compare each role's requirements with the candidate's background.",
      input: "Candidate profile + job requirements",
      output: "Scored roles selected for further review",
      explanation:
        "LLM evaluation compares the CV with job requirements and returns relevance scores. Filtering narrows the discovered roles before the cover-letter workflow starts, and the dashboard surfaces the matching information.",
      decision:
        "A compatibility percentage is a model assessment, not a guarantee of hiring eligibility. The candidate still needs to inspect the actual role and the evidence behind the match.",
      code: "for job in jobs:\n  assessment = evaluate_match(candidate, job)\n  if passes_filter(assessment):\n    shortlist(job, assessment)",
    },
    {
      title: "Draft a letter for the role",
      summary: "Use the selected job and CV as the drafting context.",
      input: "Shortlisted role + candidate data",
      output: "An initial tailored cover letter",
      explanation:
        "The generation stage drafts a letter for the particular job rather than reusing one generic application. The candidate context and job requirements supply the material for the draft.",
      decision:
        "Tailoring should connect documented experience to the role. A fluent letter still needs review for unsupported claims or missing details.",
      code: "draft = generate_cover_letter(\n  candidate_context,\n  selected_job\n)",
    },
    {
      title: "Critique the first draft",
      summary: "Give the generated text a separate evaluation pass.",
      input: "Draft letter + role context",
      output: "Feedback for refinement",
      explanation:
        "AutoHunt includes a self-critique stage that evaluates the generated letter before refinement. The critic-refiner loop gives the workflow a chance to improve the draft instead of treating the first output as final.",
      decision:
        "Generation and evaluation serve different purposes. Model feedback can help improve a letter, but it does not replace the candidate's factual review.",
      code: "feedback = critique_letter(\n  draft, candidate_context, selected_job\n)",
    },
    {
      title: "Refine the application material",
      summary: "Apply the critique before presenting the letter for approval.",
      input: "Draft + critique feedback",
      output: "A revised cover letter",
      explanation:
        "The refinement stage uses critique feedback to revise the application text. The resulting letter is part of the material the user reviews alongside the scored job.",
      decision:
        "Additional model passes cost time and tokens. Their value is a better reviewable draft, rather than permission to submit without approval.",
      code: "revised_letter = refine(draft, feedback)\nprepare_review(selected_job, revised_letter)",
    },
    {
      title: "Pause for human approval",
      summary: "Stop the graph at the boundary between preparation and action.",
      input: "Scored job + revised application material",
      output: "A user decision to approve or reject",
      explanation:
        "LangGraph's interruption mechanism lets the user review the selected job and generated letter before automated submission. PostgreSQL checkpointing supports persistence of workflow state around this pause.",
      decision:
        "The important boundary is explicit approval of the actual application. Preparing a draft should never be confused with submitting it.",
      code: "checkpoint(workflow_state)\ndecision = interrupt_for_user_review(application)\nif decision.approved:\n  resume_submission(application)",
    },
    {
      title: "Fill the approved application",
      summary: "Use browser automation to map approved data into the portal.",
      input: "Approved application + destination form",
      output: "Browser automation outcome",
      explanation:
        "Playwright navigates the job portal, locates form fields, and fills them from structured candidate data. Automated submission follows the human review stage, and its outcome feeds the tracking workflow.",
      decision:
        "Portal layouts and requirements vary. Finding a form field is different from knowing that the destination accepted an application; the outcome needs to be tracked.",
      code: "portal = open_application_destination(job)\nfill_fields(portal, approved_candidate_data)\nresult = submit_approved_application(portal)",
    },
    {
      title: "Record the outcome",
      summary: "Preserve application history alongside the workflow state.",
      input: "Submission outcome + application context",
      output: "Tracked application record",
      explanation:
        "AutoHunt uses PostgreSQL for LangGraph checkpoint persistence and SQLite for local job tracking. The dashboard exposes workflow status and application history so the user can inspect progress and results.",
      decision:
        "Tracking must distinguish the workflow's progress from the submission's outcome. Reaching the browser automation stage alone does not establish success.",
      code: "record_application(application, result)\ncheckpoint(updated_workflow_state)\nupdate_dashboard_status(result)",
    },
    {
      title: "Compose the email digest",
      summary: "Bring the application activity back into a reviewable summary.",
      input: "Application tracking records",
      output: "Email digest content",
      explanation:
        "The documented workflow includes an email-digest composition stage. It summarizes application activity from the tracked records, giving the user another way to review what the workflow has done.",
      decision:
        "A useful summary should reflect recorded outcomes rather than assuming every discovered or approved job became a successful application.",
      code: "records = load_application_activity()\ndigest = compose_email_digest(records)",
    },
  ] satisfies BuildStage[],
};
