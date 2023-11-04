import "./Hero.css";

export function Hero() {
  return (
    <div class="heroContainer">
      <h1 id="h1Header">
        Welcome to the first step of purchasing your new PC!
      </h1>
      <p class="pSentences">
        See the different available options below and see which of our different
        personal computers are your style.
      </p>
      <p class="pSentences">
        If you prefer a more personal touch, just click the below button to
        start a personal one-on-one custom build with me.
      </p>

      <HeroButton />

      <div className="heroCardContainer">
        <HeroCard
          tierName="Low"
          cpuName="Intel Pentium G4400"
          hardDriveName="Seagate HDD 256GB 5200RPM"
          ramName="4GB DDR3"
          msrpPrice="$99.99"
        />
        <HeroCard
          tierName="Medium"
          cpuName="Intel i5-9900K"
          hardDriveName="Toshiba 256GB SATA SSD"
          ramName="8GB DDR4"
          msrpPrice="$499.99"
        />
        <HeroCard
          tierName="High"
          cpuName="Intel i9-13900KS"
          hardDriveName="Samsung 1TB M.2 SSD"
          ramName="16GB DDR5"
          msrpPrice="$999.99"
        />

        <Biocard />
      </div>
    </div>
  );
}

export function HeroButton({ mailto }) {
  return <button class="contactButton">Contact us</button>;
}

export function HeroCard({
  tierName,
  cpuName,
  hardDriveName,
  ramName,
  msrpPrice,
}) {
  return (
    <div className="heroCard">
      <h4 id="pcTiers">{tierName}</h4>
      <p id="specs">Specifications</p>
      <ul id="heroListParent">
        <li id="cpuList">
          CPU:
          <span>{cpuName}</span>
        </li>
        <li id="hddList">
          Hard Drive: <span>{hardDriveName}</span>
        </li>
        <li id="ramList">
          RAM: <span>{ramName}</span>
        </li>
        <li id="msrpList">
          MSRP: <strong>{msrpPrice}</strong>
        </li>
      </ul>
    </div>
  );
}

export function Biocard() {
  return (
    <div className="bioContainer">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        venenatis faucibus lorem, eget sagittis purus egestas et. Vivamus vel
        malesuada ante. Fusce cursus, metus eu pulvinar lacinia, mauris velit
        porta felis, a egestas metus ligula ut erat. Mauris nisl orci, convallis
        ac feugiat quis, mollis sed sapien. Sed rhoncus massa at est aliquam, eu
        efficitur neque convallis. Maecenas eu lorem auctor, finibus nibh nec,
        consectetur nisl. Duis consequat quam eget semper commodo. Nulla
        facilisi. Cras quis porta elit. Fusce scelerisque sem et augue blandit
        iaculis.
      </p>
    </div>
  );
}
