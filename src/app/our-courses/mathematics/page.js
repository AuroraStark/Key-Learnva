import SEO from "@/components/SEO"
import metadata from "@/data/metadata";



const Mathematics = () => {
  const courseMeta = metadata.mathematics;
  return (
    <>

      <SEO
        title={courseMeta.title}
        description={courseMeta.description}
        url={courseMeta.url}
        image={courseMeta.image}
      />
      <main>

        <div>
          <h1>Mathematics</h1>
          <p>Welcome to the Mathematics Page!</p>
        </div>
      </main>
    </>
  );
};

export default Mathematics;
