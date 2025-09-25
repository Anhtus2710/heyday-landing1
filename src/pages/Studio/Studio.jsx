import "./Studio.css";

export default function Studio() {
  return (
    <section className="studio-section">
      {/* Tiêu đề */}
      <h2 className="studio-title">GAMEXSTUDIO</h2>
      <p className="studio-desc">
        Born from the fusion of Been Boom Labs’ explosive innovation and EBIZWORLD’s storytelling mastery, 
        GameXStudio is where bold ideas and visionary gameplay collide. This dynamic partnership is dedicated 
        to crafting experiences that blend thrilling narratives, rich world-building, and cutting-edge gaming technology.
      </p>

      {/* Logo đối tác */}
      <div className="studio-logos">
        <div className="studio-logo-box">
          <img src="/assets/image/Logo EBIZWORLD 2 copy 1.png" alt="EBIZWORLD" />
        </div>
        <div className="studio-logo-box">
          <img src="/assets/image/Frame 37969.png" alt="BEEN3COM" />
        </div>
        <div className="studio-logo-box">
          <img src="/assets/image/gamexstudio 1.png" alt="GameX Studio" />
        </div>
      </div>
    </section>
  );
}
