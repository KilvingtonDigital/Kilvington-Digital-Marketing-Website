import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fractional AI Leadership & AI Solutions Architecture | Kilvington Digital",
  description: "Practical fractional AI leadership for growing businesses. AI strategy, agent architecture, workflow automation, governance, and implementation oversight.",
};

const services = [
  ["AI Strategy & Roadmaps", "Identify high-value use cases, prioritize investments, and build an achievable adoption plan."],
  ["Agentic AI Architecture", "Design AI agents, retrieval systems, integrations, and human-in-the-loop workflows."],
  ["Implementation Leadership", "Guide developers and vendors from technical requirements through testing and deployment."],
  ["AI Governance", "Define approval checkpoints, data-handling boundaries, auditability, and operational controls."],
];

export default function FractionalAIPage() {
  return (
    <main style={{ background: "#080b09", color: "#fff" }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 1080 }}>
          <p style={{ color: "#4cfc0f", fontWeight: 700, letterSpacing: 2, marginBottom: 18 }}>FRACTIONAL AI LEADERSHIP</p>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.1, maxWidth: 950 }}>SENIOR AI LEADERSHIP. PRACTICAL BUSINESS RESULTS.</h1>
          <p style={{ color: "#d8d8d8", fontSize: "clamp(1rem, 2vw, 1.3rem)", maxWidth: 760, marginTop: 28, marginBottom: 32 }}>
            Get an experienced AI strategy and architecture partner without hiring a full-time executive. We help you decide where AI belongs, design dependable systems, and guide implementation.
          </p>
          <Link className="btn btn-primary" href="/contact">Discuss Your AI Priorities</Link>
        </div>
      </section>
      <section className="section" style={{ background: "#141a16" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 20 }}>WHAT WE LEAD</h2>
          <p style={{ color: "#d8d8d8", maxWidth: 740, marginBottom: 36 }}>From initial opportunity assessment to technical delivery, Kilvington Digital provides accountable AI leadership focused on business value.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
            {services.map(([title, description]) => (
              <article key={title} style={{ border: "1px solid #3d4a40", padding: 25, background: "#0b0e0c" }}>
                <h3 style={{ color: "#4cfc0f", fontSize: "1.15rem", marginBottom: 12 }}>{title}</h3>
                <p style={{ color: "#d8d8d8" }}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 24 }}>BUILT ON HANDS-ON EXPERIENCE</h2>
          <p style={{ color: "#d8d8d8", marginBottom: 22 }}>Our work includes retrieval-augmented AI systems, agent-driven business workflows, browser-based integrations for platforms without conventional APIs, and SaaS product architecture.</p>
          <p style={{ color: "#d8d8d8" }}>Ricky Whittaker, founder of Kilvington Digital, works directly with business leaders on AI strategy, technical decisions, and delivery oversight—supported by Kilvington Digital's implementation capabilities.</p>
        </div>
      </section>
      <section className="section" style={{ background: "#141a16" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 24 }}>HOW ENGAGEMENTS WORK</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, marginBottom: 34 }}>
            <div><h3 style={{ color: "#4cfc0f" }}>01 / Assess</h3><p>Review your workflows, systems, risks, and opportunities.</p></div>
            <div><h3 style={{ color: "#4cfc0f" }}>02 / Prioritize</h3><p>Build a business-led roadmap and architecture plan.</p></div>
            <div><h3 style={{ color: "#4cfc0f" }}>03 / Lead</h3><p>Oversee implementation, testing, governance, and improvement.</p></div>
          </div>
          <p style={{ color: "#d8d8d8", marginBottom: 26 }}>Available as a focused AI assessment, ongoing fractional AI leadership, or project-based architecture advisory. General IT infrastructure management and hardware support are outside this offering's core scope.</p>
          <Link className="btn btn-primary" href="/contact">Start a Conversation</Link>
        </div>
      </section>
    </main>
  );
}
