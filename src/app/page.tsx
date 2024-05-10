import ContactInfo from "@/components/ContactInfo";
import Skillset from "@/components/Skillset";

export default function Home() {
  return (
    <main>
      <div className="home">
        <div className="intro">
          <h1>Will Ashe</h1>
          <h2>
            Software Engineer
            <br />
            Austin, TX
          </h2>

          <ContactInfo />
        </div>

        <Skillset />
      </div>
    </main>
  );
}
