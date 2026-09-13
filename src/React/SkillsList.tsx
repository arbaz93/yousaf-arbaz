import { useState } from "react";

const CategoryIcons = {
  "Business Websites": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-app-window-mac text-[var(--sec)]"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </svg>
  ),
  "Custom Web Applications": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-tablet-smartphone text-[var(--sec)]"
    >
      <rect width="10" height="14" x="3" y="8" rx="2" />
      <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
      <path d="M8 18h.01" />
    </svg>
  ),
  "AI Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-spline-pointer text-[var(--sec)]"
    >
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M5 17A12 12 0 0 1 17 5" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Business Websites": [
      "Business websites",
      "Landing pages",
      "Marketing websites",
      "Responsive UI",
      "Contact & lead forms",
      "Third-party integrations",
      "Deployment & basic SEO",
    ],

    "Custom Web Applications": [
      "Dashboards & admin panels",
      "Client portals",
      "SaaS MVPs",
      "Authentication & user roles",
      "Database-driven applications",
      "REST APIs",
      "Custom business workflows",
    ],

    "AI Development": [
      "AI-powered features",
      "AI chat interfaces",
      "AI API integrations",
      "Document & content processing",
      "AI-assisted workflows",
      "Business process automation",
      "AI-powered SaaS features",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do
      </h3>
      <ul className="space-y-4 mt-4 text-lg" aria-label="Services offered">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;
          const panelId = `${category.toLowerCase().replace(/\s+/g, "-")}-panel`;
          const buttonId = `${category.toLowerCase().replace(/\s+/g, "-")}-button`;

          return (
            <li key={category} className="w-full">
              <div className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(category)}
                  className="group w-full text-left transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sec)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] focus-visible:shadow-[0_0_0_4px_rgba(164,118,255,0.27)] focus-visible:rounded-2xl"
                >
                  <div className="flex items-center gap-3 p-4">
                    {CategoryIcons[category as keyof typeof CategoryIcons]}
                    <div className="flex items-center gap-2 flex-grow justify-between">
                      <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                        <span className="block truncate text-[var(--white)] text-lg">
                          {category}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-all duration-300 px-4 ${
                    isOpen
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="pl-1">•</span>
                        <span className="pl-3">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
