const Achievements = () => {
const skills = [
  {
    name: "Inbound Calls",
    percentage: 50,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.84.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.34.25 2.64.74 3.84a1 1 0 01-.21 1.11l-2.2 2.2z" />
      </svg>
    ),
    color: "#FF6B47",
  },
  {
    name: "Outbound Calls",
    percentage: 25,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z" />
      </svg>
    ),
    color: "#6B73FF",
  },
  {
    name: "Email Support",
    percentage: 10,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
      </svg>
    ),
    color: "#4ECDC4",
  },
  {
    name: "Lead Generation",
    percentage: 10,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 3h14a2 2 0 012 2v16l-7-5-7 5V5a2 2 0 012-2z" />
      </svg>
    ),
    color: "#FF9500",
  },
  {
    name: "Chat Support",
    percentage: 5,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 6h-18a1 1 0 00-1 1v12l4-4h15a1 1 0 001-1V7a1 1 0 00-1-1z" />
      </svg>
    ),
    color: "#FFD93D",
  },

  
];


  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900/30 to-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-smb shining-effect">
            Empowering {" "}
            <span className="text-primary font-semibold">Businesses</span>{" "}
            Innovative Solutions 
          </p>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            We're proud to work with
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-muted-foreground">
            a diverse range of companies.
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              {/* Icon Circle */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.icon}
                </div>
              </div>

              {/* Percentage */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  {skill.percentage}%
                </span>
              </div>

              {/* Skill Name */}
              <h4 className="font-medium text-sm text-muted-foreground">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
