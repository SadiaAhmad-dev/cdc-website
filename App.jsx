import "./App.css";
import { useState } from "react";
import UETLogo from "./uet-logo.png";
import DirectorPhoto from "./director.jpg";
import {
  ArrowUpRight,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  BookOpen,
  GraduationCap,
  Compass,
  FileText,
  Mic,
  Search,
  Handshake,
  Building2,
  BookMarked,
  Map,
  Link2,
  PlayCircle as YouTube,
  Globe2,
  Menu,
  X,
} from "lucide-react";

const OFFICIAL_CDC =
  "https://www.uetpeshawar.edu.pk/career-development-center/";

const UET_WEBSITE =
  "https://www.uetpeshawar.edu.pk/";

const CDC_LINKEDIN =
  "https://pk.linkedin.com/company/cdcuet";

const CDC_YOUTUBE =
  "https://www.youtube.com/@careerdevelopmentcenteruet1661/featured";

const CDC_HANDBOOK =
  "https://www.uetpeshawar.edu.pk/cdc/handbook.php";

const CDC_TEAM =
  "https://www.uetpeshawar.edu.pk/cdc/cdcteam.php";

const CDC_OFFICES =
  "https://www.uetpeshawar.edu.pk/cdc/offices.php";

const CDC_PORTALS =
  "https://www.uetpeshawar.edu.pk/cdc/portals.php";

const CDC_EVENTS =
  "https://www.uetpeshawar.edu.pk/cdc/events.php";

const CDC_CONTACT =
  "https://www.uetpeshawar.edu.pk/cdc/contact.php";

const CDC_CAREER_PORTAL =
  "https://uetpeshawar.rozee.pk/register.php?accType=alumni&ac=new";

const CDC_EMAIL =
  "mailto:cdc@uetpeshawar.edu.pk";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app">
      <div className="success-news-bar">
  <div className="moving-news">
    2026 Success Story: 200+ Placements • 200+ Graduates to be Trained by
    Mobiserve • 40+ Industry Collaborations
  </div>
</div>

      {/* ================= HEADER ================= */}
     <header className="site-header">
  <div className="header-inner">

    <a
      href="#home"
      className="brand"
      onClick={() => setMobileMenuOpen(false)}
    >
      <img
        src={UETLogo}
        alt="UET Peshawar"
        className="uet-logo"
      />
      <div className="brand-text">
        <strong>Career Development Center</strong>
        <span>UET Peshawar</span>
      </div>
    </a>

    <button
      type="button"
      className="mobile-menu-button"
      aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={mobileMenuOpen}
      onClick={() => setMobileMenuOpen((open) => !open)}
    >
      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

    <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <a href="#home" className="active" onClick={() => setMobileMenuOpen(false)}>Home</a>
      <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
      <a href="#opportunities" onClick={() => setMobileMenuOpen(false)}>Opportunities</a>
      <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
      <a href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</a>

      <a
        href={OFFICIAL_CDC}
        target="_blank"
        rel="noopener noreferrer"
        className="official-link"
        onClick={() => setMobileMenuOpen(false)}
      >
        Official CDC <ArrowUpRight size={15} />
      </a>
    </nav>

  </div>
</header>
{/* ================= DIRECTOR'S MESSAGE ================= */}
<section className="director-message-section">

  <div className="container">

    <div className="director-message-card">

      {/* Director Photo */}
      <div className="director-photo">
        <img
          src={DirectorPhoto}
          alt="Engr. Fawad Haider Khan, Director CDC"
        />
      </div>

      {/* Message */}
      <div className="director-content">

        <span className="section-label">
          MESSAGE FROM THE DIRECTOR
        </span>

        <h2>
          Career Development Center
          <span> (CDC), UET Peshawar</span>
        </h2>

        <div className="director-greeting">
          <p>بسم اللہ الرحمن الرحیم</p>
          <p>السلام علیکم ورحمتہ اللہ و برکاتہ</p>
        </div>

        <p>
          At the Career Development Center, our mission goes beyond
          helping students find jobs. We prepare them for careers,
          entrepreneurship, lifelong learning and meaningful contribution
          to society.
        </p>

        <p>
          Through internships, industry linkages, career counselling,
          mentorship, professional training, job placements and
          entrepreneurship opportunities, CDC strives to bridge the gap
          between campus and the world of work.
        </p>

        <p>
          Our commitment is to develop employable, skilled, ethical,
          entrepreneurial, and future-ready graduates who can create
          opportunities—not merely seek them.
        </p>

        <p>
          Under the visionary leadership of Honourable Vice Chancellor,
          our goal is to transform CDC-UETP into a National Center for
          Career Development NCCD.
        </p>

        <p className="director-highlight">
          Together, we are transforming potential into performance and
          education into impact.
        </p>

        <div className="director-signature">
          <strong>Engr. Fawad Haider Khan</strong>
          <span>Director, Career Development Center (CDC)</span>
          <span>University of Engineering & Technology, Peshawar</span>
        </div>

        <a href="#contact" className="btn director-cta">
          Contact CDC for Collaboration <ArrowRight size={15} strokeWidth={1.8} />
        </a>

      </div>

    </div>

  </div>

</section>
<section className="success-stories">
  <h2>Our Success Story — 2026</h2>

  <div className="success-story-container">
    <div className="success-card">
      <h3>200+ Placements</h3>
      <p>
        We brought 200+ placements, including internships, trainings, and
        job opportunities for UET Peshawar students and graduates.
      </p>
    </div>

    <div className="success-card">
      <h3>200+ Graduates to be Trained</h3>
      <p>
        Mobiserve has committed to train 200+ fresh graduates of UET Peshawar
        during 2026–27.
      </p>
    </div>

    <div className="success-card">
      <h3>40+ Industry Collaborations</h3>
      <p>
        More than 40 multinational and national industries were brought into
        collaboration with the Career Development Center in 2026.
      </p>
    </div>
  </div>
</section>

      {/* ================= HERO ================= */}
      <main>

        <section id="home" className="hero">

          <div className="hero-background"></div>

          <div className="container hero-content">

            <div className="hero-text">

              <div className="hero-badge">
                UET PESHAWAR • CDC INTERNAL HUB
              </div>

              <h2>
                Your Gateway to
                <span> Career Opportunities</span>
              </h2>

              <p>
                A central information hub for students, alumni, employers
                and the Career Development Center at UET Peshawar.
              </p>

              <div className="hero-buttons">

                <a
                  href={OFFICIAL_CDC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                >
                  Visit Official CDC Website <ArrowUpRight size={14} strokeWidth={1.8} />
                </a>

                <a href="#opportunities" className="btn secondary">
                  Explore Opportunities
                </a>

              </div>

            </div>


          </div>
        </section>


        {/* ================= QUICK LINKS ================= */}
        <section className="quick-section">

          <div className="container quick-grid">

            <a href="#opportunities" className="quick-card">
              <div className="quick-icon"><BriefcaseBusiness size={28} strokeWidth={1.6} /></div>
              <div>
                <h3>Jobs</h3>
                <p>Career opportunities</p>
              </div>
            </a>

            <a href="#opportunities" className="quick-card">
              <div className="quick-icon"><GraduationCap size={28} strokeWidth={1.6} /></div>
              <div>
                <h3>Internships</h3>
                <p>Industry experience</p>
              </div>
            </a>

            <a href="#events" className="quick-card">
              <div className="quick-icon"><CalendarDays size={28} strokeWidth={1.6} /></div>
              <div>
                <h3>Events</h3>
                <p>Upcoming activities</p>
              </div>
            </a>

            <a href="#resources" className="quick-card">
              <div className="quick-icon"><BookOpen size={28} strokeWidth={1.6} /></div>
              <div>
                <h3>Resources</h3>
                <p>Career guidance</p>
              </div>
            </a>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section className="section about-section">

          <div className="container about-grid">

            <div>

              <span className="section-label">
                ABOUT THIS HUB
              </span>

              <h2>
                One place for your
                <span> career journey.</span>
              </h2>

              <p>
                The CDC Internal Hub is designed to provide students and
                alumni with quick access to career-related information,
                opportunities, events and resources.
              </p>

              <p>
                It also connects users directly with the official UET
                Career Development Center website and its social media
                platforms.
              </p>

              <a
                href={OFFICIAL_CDC}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Read more on the official CDC website →
              </a>

            </div>


            
          </div>

        </section>


        {/* ================= SERVICES ================= */}
        <section id="services" className="section light">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                CDC SERVICES
              </span>

              <h2>How CDC Supports Students</h2>

              <p>
                The official CDC provides a range of career-development
                services for UET students and graduates.
              </p>

            </div>


            <div className="services-grid">

              <div className="service-card">
                <span>01</span>
                <div className="service-icon"><Compass size={36} strokeWidth={1.5} /></div>
                <h3>Career Decision Making</h3>
                <p>
                  Guidance for choosing suitable career and higher-study
                  paths.
                </p>
              </div>

              <div className="service-card">
                <span>02</span>
                <div className="service-icon"><FileText size={36} strokeWidth={1.5} /></div>
                <h3>CV & Cover Letter</h3>
                <p>
                  Support with professional resumes, CVs and cover
                  letters.
                </p>
              </div>

              <div className="service-card">
                <span>03</span>
                <div className="service-icon"><Mic size={36} strokeWidth={1.5} /></div>
                <h3>Interview Practice</h3>
                <p>
                  Prepare for interviews and improve professional
                  communication.
                </p>
              </div>

              <div className="service-card">
                <span>04</span>
                <div className="service-icon"><BriefcaseBusiness size={36} strokeWidth={1.5} /></div>
                <h3>Jobs & Internships</h3>
                <p>
                  Find internships and employment opportunities.
                </p>
              </div>

              <div className="service-card">
                <span>05</span>
                <div className="service-icon"><Search size={36} strokeWidth={1.5} /></div>
                <h3>Job Search Strategies</h3>
                <p>
                  Learn effective methods for finding suitable
                  opportunities.
                </p>
              </div>

              <div className="service-card">
                <span>06</span>
                <div className="service-icon"><GraduationCap size={36} strokeWidth={1.5} /></div>
                <h3>Graduate Studies</h3>
                <p>
                  Guidance about postgraduate programs and higher
                  education.
                </p>
              </div>

              <div className="service-card">
                <span>07</span>
                <div className="service-icon"><Handshake size={36} strokeWidth={1.5} /></div>
                <h3>Industry Connections</h3>
                <p>
                  Connect students with employers and industry
                  professionals.
                </p>
              </div>

              <div className="service-card">
                <span>08</span>
                <div className="service-icon"><Building2 size={36} strokeWidth={1.5} /></div>
                <h3>Employer Facilitation</h3>
                <p>
                  Support organizations in connecting with UET talent.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= OPPORTUNITIES ================= */}
        <section id="opportunities" className="section">

  <div className="container">

    <div className="section-heading">

      <span className="section-label">
        CAREER OPPORTUNITIES
      </span>

      <h2>
        Find Your Next Opportunity
      </h2>

      <p>
        Access career opportunities, internships, career portals and
        professional resources through the CDC network.
      </p>

    </div>


    <div className="opportunity-grid">


     <section className="opportunities-section">
  <div className="opportunities-container">

    <div className="opportunity-cards">

      {/* JOBS */}
      <a
        href={CDC_CAREER_PORTAL}
        target="_blank"
        rel="noopener noreferrer"
        className="opportunity-card"
      >
        <div className="opportunity-icon">
          <BriefcaseBusiness size={28} strokeWidth={1.6} />
        </div>

        <div className="opportunity-content">
          <span className="card-label">
            JOB OPPORTUNITIES
          </span>

          <h3>
            Jobs & Recruitment
          </h3>

          <p>
            Explore employment opportunities and recruitment activities
            available through the CDC.
          </p>

          <strong>
            Explore Jobs
            <ArrowRight size={16} strokeWidth={1.8} />
          </strong>
        </div>
      </a>


      {/* INTERNSHIPS */}
      <a
        href={CDC_LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="opportunity-card"
      >
        <div className="opportunity-icon">
          <GraduationCap size={28} strokeWidth={1.6} />
        </div>

        <div className="opportunity-content">
          <span className="card-label">
            INTERNSHIPS
          </span>

          <h3>
            Internship Opportunities
          </h3>

          <p>
            Stay updated about internship opportunities and student
            career programs shared by CDC.
          </p>

          <strong>
            View Opportunities
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </strong>
        </div>
      </a>


      {/* CAREER PORTAL */}
      <a
        href={CDC_CAREER_PORTAL}
        target="_blank"
        rel="noopener noreferrer"
        className="opportunity-card"
      >
        <div className="opportunity-icon">
          <Globe2 size={28} strokeWidth={1.6} />
        </div>

        <div className="opportunity-content">
          <span className="card-label">
            CAREER PORTAL
          </span>

          <h3>
            Career Portal
          </h3>

          <p>
            Access information about the career portal available for
            UET students and alumni.
          </p>

          <strong>
            Open Career Portal
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </strong>
        </div>
      </a>

    </div>

  </div>
</section>

    </div>

  </div>

</section>


        {/* ================= EVENTS ================= */}
        <section id="events" className="section light">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                CDC ACTIVITIES
              </span>

              <h2>Events & Activities</h2>

              <p>
                Recruitment drives, workshops, seminars and other
                career-oriented activities.
              </p>

            </div>


            <div className="events-grid">

              <div className="event-card">

                <div className="event-number">
                  01
                </div>

                <div>
                  <span>RECRUITMENT</span>
                  <h3>Recruitment Drives</h3>

                  <p>
                    Opportunities for students to connect with employers
                    and participate in recruitment activities.
                  </p>

                  <a
                    href={CDC_EVENTS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CDC Events →
                  </a>
                </div>

              </div>


              <div className="event-card">

                <div className="event-number">
                  02
                </div>

                <div>
                  <span>WORKSHOPS</span>
                  <h3>Career Workshops</h3>

                  <p>
                    Career planning, professional development and
                    emerging-skills sessions.
                  </p>

                  <a
                    href={CDC_EVENTS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Workshops →
                  </a>
                </div>

              </div>


              <div className="event-card">

                <div className="event-number">
                  03
                </div>

                <div>
                  <span>SEMINARS</span>
                  <h3>Career Seminars</h3>

                  <p>
                    Sessions with professionals and experts from different
                    industries.
                  </p>

                  <a
                    href={CDC_YOUTUBE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch CDC Videos <ArrowUpRight size={14} strokeWidth={1.8} />
                  </a>
                </div>

              </div>

            </div>


            <div className="events-button">

              <a
                href={CDC_EVENTS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn green"
              >
                See All Official CDC Events <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>

            </div>

          </div>

        </section>


        {/* ================= RESOURCES ================= */}
        <section id="resources" className="section">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                STUDENT RESOURCES
              </span>

              <h2>Career Resources</h2>

              <p>
                Useful guides and resources for building your professional
                career.
              </p>

            </div>


            <div className="resources-grid">

              <a
                href="https://www.uetpeshawar.edu.pk/cdc/handbook.php"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >

                <div className="resource-icon"><BookMarked size={30} strokeWidth={1.5} /></div>

                <span>GUIDE</span>

                <h3>CDC Handbook</h3>

                <p>
                  Career guidance covering CVs, interviews, job search,
                  higher studies and professional development.
                </p>

                <strong>
                  Open Handbook <ArrowUpRight size={14} strokeWidth={1.8} />
                </strong>

              </a>


              <a
                href={CDC_HANDBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >

                <div className="resource-icon"><Map size={30} strokeWidth={1.5} /></div>

                <span>CAREER</span>

                <h3>Career Roadmap</h3>

                <p>
                  Explore career-development information and guidance
                  provided through CDC resources.
                </p>

                <strong>
                  Explore CDC Resources <ArrowUpRight size={14} strokeWidth={1.8} />
                </strong>

              </a>


              <a
                href={CDC_PORTALS}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >

                <div className="resource-icon"><Link2 size={30} strokeWidth={1.5} /></div>

                <span>PORTALS</span>

                <h3>Other Career Portals</h3>

                <p>
                  Access job-search and career platforms recommended by
                  the CDC.
                </p>

                <strong>
                  View Portals <ArrowUpRight size={14} strokeWidth={1.8} />
                </strong>

              </a>

            </div>

          </div>

        </section>

        {/* ================= CONNECT ================= */}
        <section id="connect" className="connect-section">

          <div className="container">

            <div className="connect-heading">

              <span className="section-label">
                CDC NETWORK
              </span>

              <h2>
                Stay Connected With CDC
              </h2>

              <p>
                Quickly access the official CDC website and social media
                platforms.
              </p>

            </div>


            <div className="connect-grid">


              <a
                href={OFFICIAL_CDC}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card official"
              >

                <div className="connect-icon"><Globe2 size={20} strokeWidth={1.7} /></div>

                <div>
                  <span>OFFICIAL</span>
                  <h3>CDC Website</h3>
                  <p>Visit the official UET CDC website.</p>
                </div>

                <b><ArrowUpRight size={18} strokeWidth={1.8} /></b>

              </a>


              <a
                href={CDC_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card"
              >

               <div className="connect-icon">in</div>
                <div>
                  <span>SOCIAL MEDIA</span>
                  <h3>LinkedIn</h3>
                  <p>Follow CDC professional updates.</p>
                </div>

                <b><ArrowUpRight size={18} strokeWidth={1.8} /></b>

              </a>


              <a
                href={CDC_YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card"
              >

                <div className="connect-icon">▶</div>

                <div>
                  <span>SOCIAL MEDIA</span>
                  <h3>YouTube</h3>
                  <p>Watch CDC webinars and career sessions.</p>
                </div>

                <b><ArrowUpRight size={18} strokeWidth={1.8} /></b>

              </a>

<a 
  href="https://uetpeshawar.rozee.pk/register.php?accType=alumni&ac=new" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="connect-card rozee" 
>
  <div className="connect-icon">
    <BriefcaseBusiness size={20} strokeWidth={1.7} />
  </div>

  <div>
    <span>CAREER PORTAL</span>
    <h3>Rozee UET</h3>
    <p>Register and explore career opportunities through the UET Rozee portal.</p>
  </div>

  <b>
    <ArrowUpRight size={18} strokeWidth={1.8} />
  </b>
</a>
              <a
                href={UET_WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card"
              >

                <div className="connect-icon">
                  UET
                </div>

                <div>
                  <span>UNIVERSITY</span>
                  <h3>UET Peshawar</h3>
                  <p>Visit the official university website.</p>
                </div>

                <b><ArrowUpRight size={18} strokeWidth={1.8} /></b>

              </a>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">

          <div className="container contact-grid">

            <div>

              <span className="section-label">
                CONTACT CDC
              </span>

              <h2>
                Need Career Guidance?
              </h2>

              <p>
                Contact the Career Development Center for career
                guidance, internships, recruitment and professional
                development.
              </p>

              <div className="contact-actions">
                <a
                  href={CDC_EMAIL}
                  className="btn white"
                >
                  Email CDC
                </a>

                <a
                  href={CDC_CONTACT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn contact-outline"
                >
                  CDC Contact Page <ArrowUpRight size={14} strokeWidth={1.8} />
                </a>
              </div>

            </div>


            <div className="contact-details">

              <div>
                <span>EMAIL</span>
                <a href={CDC_EMAIL}>
                  cdc@uetpeshawar.edu.pk
                </a>
              </div>

              <div>
                <span>PHONE</span>
                <p>0092-91-9222124</p>
              </div>

              <div>
                <span>MOBILE</span>
                <p>0336-9250517</p>
              </div>

              <div>
                <span>LOCATION</span>
                <p>
                  Administration Block Basement
                  <br />
                  CDC Office, UET Peshawar
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="container footer-main">

          <div>

            <a href="#home" className="footer-brand">

              <div className="brand-logo small">
                CDC
              </div>

              <div>
                <strong>Career Development Center</strong>
                <span>UET Peshawar</span>
              </div>

            </a>

            <p>
              Internal information and resource hub for the Career
              Development Center at UET Peshawar.
            </p>

          </div>


          <div className="footer-column">

            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#opportunities">Opportunities</a>
            <a href="#events">Events</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact CDC</a>

          </div>


          <div className="footer-column">

            <h4>External Links</h4>

            <a
              href={OFFICIAL_CDC}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official CDC Website ↗
            </a>

            <a
              href={UET_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              UET Peshawar ↗
            </a>

            <a
              href={CDC_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href={CDC_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube ↗
            </a>

            <a
              href={CDC_TEAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC Team ↗
            </a>

            <a
              href={CDC_OFFICES}
              target="_blank"
              rel="noopener noreferrer"
            >
              Career Resource Offices ↗
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <div className="container">

            <p>
              © 2026 Career Development Center - UET Peshawar
            </p>

            <p>
              Internal CDC Hub
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;