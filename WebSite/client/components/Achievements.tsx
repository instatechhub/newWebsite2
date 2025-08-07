const Achievements = () => {
  const skills = [
    {
      name: "UI/UX Design",
      percentage: 95,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </svg>
      ),
      color: "#FF6B47",
    },
    {
      name: "Development",
      percentage: 90,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      color: "#6B73FF",
    },
    {
      name: "Graphic Design",
      percentage: 85,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      ),
      color: "#4ECDC4",
    },
    {
      name: "Sketch",
      percentage: 84,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      ),
      color: "#FFD93D",
    },
    {
      name: "WordPress",
      percentage: 78,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.109m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.661.854-.063.899 0 0 .584.075 1.207.105l1.796 4.925-2.522 7.555-4.196-12.48c.649-.03 1.243-.105 1.243-.105.585-.075.519-.93-.065-.899 0 0-1.759.135-2.88.135-.2 0-.438-.008-.69-.015C4.708 2.708 8.094 1.244 11.896 1.244c2.8 0 5.344 1.077 7.241 2.839-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.889 1.643.889 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014z" />
        </svg>
      ),
      color: "#21759B",
    },
    {
      name: "Graphic Design",
      percentage: 85,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      ),
      color: "#FF9500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900/30 to-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-sm">
            More than{" "}
            <span className="text-primary font-semibold">200+ companies</span>{" "}
            trusted us worldwide
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
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
