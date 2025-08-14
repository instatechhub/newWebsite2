import logo1 from "../assests/magicpinlogo1.png";
import logo2 from "../assests/indiamartlogo2.png";
import logo3 from "../assests/bajajlogo3.png";
import logo4 from "../assests/shopeelogo5.png";
import logo5 from "../assests/tatanewlogo4.png";

const Clients = () => {
  const clients = [
    { name: "Magic Pin", logo: logo1 },
    { name: "India Mart", logo: logo2 },
    { name: "Bajaj", logo: logo3 },
    { name: "Shopee", logo: logo4 },
    { name: "TataNeu", logo: logo5 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            We're proud to work with
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-muted-foreground">
            a diverse range of companies.
          </h3>
        </div>

        {/* Clients Grid */}
        <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-15 max-w-4xl mx-auto flex-wrap">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-30 h-30 md:w-30md:h-30 rounded-full bg-card/50 border border-border/20 hover:border-primary/30 transition-all duration-300 group hover:scale-110"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    src={client.logo}
                    alt="logo"
                      className="w-30 h-30 md:w-36 md:h-36 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto mt-8 flex-wrap">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <h4 className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                {client.name}
              </h4>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
