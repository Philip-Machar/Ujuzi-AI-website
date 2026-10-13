import { useState } from "react";
import "./App.css";

const EMAIL = "philipmachar788@gmail.com";
const PHONE_DISPLAY = "+254 795 568 537";
const PHONE_LINK = "+254795568537";

const conversations = [
  {
    id: "farming",
    label: "Farming",
    ask: "Ninawezaje kuboresha mavuno yangu ya mahindi msimu huu?",
    answer:
      "Tumia mbegu bora, panda kwa nafasi inayofaa, na kagua mimea mara kwa mara ili kugundua wadudu mapema.",
    english:
      "How can I improve my maize harvest this season? Use quality seed, space your plants correctly and inspect them often to catch pests early.",
  },
  {
    id: "learning",
    label: "Learning",
    ask: "Eleza usanisinuru kwa maneno rahisi.",
    answer:
      "Ni jinsi mimea hutengeneza chakula chake kwa kutumia mwanga wa jua, maji na hewa ya kaboni dayoksaidi.",
    english:
      "Explain photosynthesis simply. It is how plants make their food using sunlight, water and carbon dioxide.",
  },
  {
    id: "careers",
    label: "Careers",
    ask: "Nifanyeje CV nzuri ya kazi yangu ya kwanza?",
    answer:
      "Weka maelezo yako, elimu, ujuzi na uzoefu kwenye ukurasa mmoja. Kuwa mfupi na wazi.",
    english:
      "How do I write a good CV for my first job? Put your details, education, skills and experience on one page. Keep it short and clear.",
  },
  {
    id: "health",
    label: "Health",
    ask: "Nifanye nini kujikinga na malaria?",
    answer:
      "Lala kwenye chandarua kilichotiwa dawa na ondoa maji yaliyosimama karibu na nyumba. Ukipata homa, nenda kituo cha afya.",
    english:
      "How can I protect myself from malaria? Sleep under a treated net and clear standing water near your home. If you get a fever, visit a health facility.",
  },
];

const steps = [
  {
    title: "Send a text",
    text: "Write your question in Swahili, Sheng or another supported language and send it as a normal SMS.",
  },
  {
    title: "We receive it",
    text: "The message is routed to our service through the Africa's Talking SMS network.",
  },
  {
    title: "AI prepares an answer",
    text: "A language model understands the question and writes a clear, short reply in the same language.",
  },
  {
    title: "Get a reply by SMS",
    text: "The answer arrives on the same phone, in the same thread. No app and no mobile data.",
  },
];

const icons = {
  leaf: "M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l8-8",
  book: "M4 5.5A1.5 1.5 0 0 1 5.5 4H20v14H5.5A1.5 1.5 0 0 0 4 19.5v-14zM4 19.5A1.5 1.5 0 0 0 5.5 21H20",
  briefcase: "M4 8h16v11H4zM9 8V5h6v3",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
  signal: "M5 20v-4M10 20v-8M15 20V8M20 20V4",
  lang: "M4 6h9M8.5 4v2M6 6c.6 3 2.8 5.5 6 7M12 6c-.8 3.2-3.500 5.800-7.500 7M13 20l4-9 4 9M14.500 17h5",
  arrow: "M5 12h14m-6-6 6 6-6 6",
};

function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={icons[name]} />
    </svg>
  );
}

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? "logo-light" : ""}`} href="#top" aria-label="Ujuzi AI home">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={light ? "#fff" : "#0B4A37"} />
        <path
          fill={light ? "#0B4A37" : "#fff"}
          d="M9 10.5C9 9.1 10.1 8 11.5 8h9c1.4 0 2.5 1.1 2.5 2.5v6c0 1.4-1.1 2.5-2.5 2.5h-5L11.5 22v-3C10.1 19 9 17.9 9 16.5z"
        />
        <circle cx="24" cy="8" r="3.2" fill="#F5B82E" />
      </svg>
      <span>Ujuzi AI</span>
    </a>
  );
}

function Phone({ convo }) {
  return (
    <div className="phone" role="img" aria-label="Example SMS conversation with Ujuzi AI">
      <div className="phone-bar">
        <span className="phone-avatar">U</span>
        <div>
          <strong>Ujuzi AI</strong>
          <span>Text message</span>
        </div>
      </div>
      <div className="phone-thread" key={convo.id}>
        <div className="bubble bubble-out">{convo.ask}</div>
        <div className="bubble bubble-in">{convo.answer}</div>
        <p className="translation">
          <span>In English</span>
          {convo.english}
        </p>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "Does the person asking need internet or a smartphone?",
    a: "No. Questions and answers travel as standard SMS, so any phone that can send and receive text messages can use the service.",
  },
  {
    q: "Which languages are supported?",
    a: "Ujuzi AI is built for Swahili and Sheng, and can respond in other supported languages. We are expanding coverage over time.",
  },
  {
    q: "Is the health information medical advice?",
    a: "No. Answers on health are general information only and are not a substitute for a qualified health professional.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(conversations[0]);
  const close = () => setMenuOpen(false);

  return (
    <div id="top">
      <header className="header">
        <div className="container header-inner">
          <Logo />
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span /><span />
          </button>
          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#how" onClick={close}>How it works</a>
            <a href="#use-cases" onClick={close}>Use cases</a>
            <a href="#roadmap" onClick={close}>Roadmap</a>
            <a href="#faq" onClick={close}>FAQ</a>
            <a className="btn btn-primary btn-sm" href="#contact" onClick={close}>Contact us</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">SMS-based AI assistant</p>
              <h1>AI that works on every phone.</h1>
              <p className="lead">
                Ujuzi AI answers questions by text message, in Swahili, Sheng and more.
                No smartphone, mobile data or app required.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#how">See how it works</a>
                <a className="btn btn-ghost" href="#contact">Partner with us</a>
              </div>
              <ul className="hero-points">
                <li>Works on basic phones</li>
                <li>Swahili and Sheng</li>
                <li>Farming, learning, careers, health</li>
              </ul>
            </div>

            <div className="stage">
              <Phone convo={active} />
              <div className="chips" role="tablist" aria-label="Example topics">
                {conversations.map((c) => (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={active.id === c.id}
                    className={`chip ${active.id === c.id ? "chip-active" : ""}`}
                    onClick={() => setActive(c)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="section-head">
              <h2>Built for how people actually connect</h2>
              <p>
                Most AI tools assume a recent smartphone, a data bundle and fluency in English.
                Ujuzi AI removes all three.
              </p>
            </div>
            <div className="trio">
              {[
                ["phone", "Any phone", "Works on feature phones as well as smartphones. If it can send a text, it can use Ujuzi AI."],
                ["signal", "No data needed", "Standard SMS means no mobile data, Wi-Fi or app downloads for the person asking."],
                ["lang", "Local languages", "Ask in Swahili or Sheng and get the answer back in the same language."],
              ].map(([icon, title, text]) => (
                <div className="feature" key={title}>
                  <span className="icon-box"><Icon name={icon} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="how">
          <div className="container">
            <div className="section-head">
              <h2>How it works</h2>
              <p>Four steps from question to answer, all over SMS.</p>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li className="step" key={s.title}>
                  <span className="step-num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="use-cases">
          <div className="container">
            <div className="section-head">
              <h2>Practical knowledge, where it is needed</h2>
              <p>Ujuzi AI is designed to help with everyday questions across four areas.</p>
            </div>
            <div className="cards">
              {[
                ["leaf", "Agriculture", "Crop care, pest prevention and seasonal guidance for farmers.", "Ninawezaje kuzuia wadudu kwenye mahindi?"],
                ["book", "Education", "Clear explanations for students, in the language they think in.", "Eleza usanisinuru kwa maneno rahisi."],
                ["briefcase", "Careers", "Guidance on CVs, applications and first steps into work.", "Nifanyeje CV nzuri ya kazi yangu ya kwanza?"],
                ["heart", "Health information", "General, easy-to-understand health information. Not medical advice.", "Nifanye nini kujikinga na malaria?"],
              ].map(([icon, title, text, example]) => (
                <article className="card" key={title}>
                  <span className="icon-box"><Icon name={icon} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <p className="example">“{example}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="roadmap">
          <div className="container">
            <div className="section-head">
              <h2>Roadmap</h2>
              <p>What the service does today and where it is heading.</p>
            </div>
            <div className="road">
              <div className="road-col">
                <span className="badge badge-live">Available</span>
                <h3>SMS questions and answers</h3>
                <ul>
                  <li>Ask by text message, no data or app</li>
                  <li>Swahili and Sheng support</li>
                  <li>Agriculture, education, careers and health topics</li>
                </ul>
              </div>
              <div className="road-col">
                <span className="badge badge-next">Planned</span>
                <h3>Voice assistant</h3>
                <ul>
                  <li>Talk to Ujuzi AI by phone call</li>
                  <li>Designed for people who cannot comfortably read or write</li>
                  <li>More languages and regions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container narrow">
            <div className="section-head">
              <h2>Frequently asked questions</h2>
            </div>
            {faqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container cta-grid">
            <div>
              <h2>Bring Ujuzi AI to your community</h2>
              <p>
                We work with organisations that want to put useful knowledge in more
                people's hands. Tell us about your programme and we will get back to you.
              </p>
            </div>
            <div className="cta-card">
              <a className="btn btn-accent" href={`mailto:${EMAIL}?subject=Ujuzi%20AI%20enquiry`}>
                Email our team
              </a>
              <dl>
                <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
                <div><dt>Phone</dt><dd><a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a></dd></div>
                <div><dt>Based in</dt><dd>Kenya</dd></div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo light />
            <p className="footer-tag">AI for everyone, everywhere.</p>
          </div>
          <nav aria-label="Footer">
            <a href="#how">How it works</a>
            <a href="#use-cases">Use cases</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Ujuzi AI. All rights reserved.</span>
          <span>Powered by Africa's Talking and OpenAI.</span>
        </div>
      </footer>
    </div>
  );
}