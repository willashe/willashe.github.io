import ContactInfo from '@/components/ContactInfo';
import Skillset from '@/components/Skillset';

export default function Home() {
  return (
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

      {process.env.NODE_ENV === 'production' ? (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            color: 'white',
            fontFamily: 'monospace',
            margin: 10,
          }}
        >
          prod
        </div>
      ) : null}
    </div>
  );
}
