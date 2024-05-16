import Image from "next/image";

const config = {
  project: {
    link: 'https://github.com/iamlexivale/reforged-docs'
  },
  logo: (
    <>
      <Image
        src="https://cdn.discordapp.com/attachments/1240631069879963649/1240631093846081689/reforged.png?ex=6647433e&is=6645f1be&hm=4838d2e651bc6c8648c481d40ba7f05bde9f1b66f786cd357bb5cc41abd3a62c&"
        width={24} height={24} alt="Logo Reforged"
      />
      <b style={{ marginLeft: '.4em' }}>Reforged Public API Reference</b>
    </>
  ),
  docsRepositoryBase: 'https://github.com/iamlexivale/reforged-docs',
  footer: '',
  darkMode: false
};

export default config;
