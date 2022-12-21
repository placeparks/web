import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import hannan from "../public/hannan.png";
import awards01 from "../public/awards01.jpg";
import awards03 from "../public/award03.png";
import awards02 from "../public/award02.png";
import awards04 from "../public/award04.png";
import awards05 from "../public/award05.PNG";
import awards07 from "../public/award07.PNG";
import awards08 from "../public/award08.PNG";
import awards09 from "../public/award09.PNG";
import exchange from "../public/exchange.png";
import blockchain from "../public/blockchain.png";
import vault from "../public/vault.png";
import contracts from "../public/contracts.png";
import defi from "../public/defi.png";
import nft from "../public/nft.png";
import dapps from "../public/dapps.png";
import security from "../public/security.png";
import Image from "next/image";
import web1 from "../public/project1.PNG";
import web2 from "../public/project2.PNG";
import web3 from "../public/project3.PNG";
import web4 from "../public/tenzies.PNG";
import web5 from "../public/meme.PNG";
import web6 from "../public/web6.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
 
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-cyan-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl animate-bounce" >developed by Nittydevs</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
  <li>
              <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href ="https://ipfs.io/ipfs/QmU4MM7y1tAG6eXXdLjPhVjCSDqYCQTM9n3uNTgUvRvXtM?filename=Hannan-Shoukat%20CV.pdf" target="_blank" rel="noreferrer">
                          
                  Resume
                  </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Hannan Shaukat aka Mirac.eth 
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            FULL STACK DEVELOPER
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a Utility Developer with major Expertise in different Blockchain Technologies & respective Blockchain. Always interested in integration of real world with Blockchain. ALWAYS LEARNING & UNLEARNING!!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
             
                <a href="https://twitter.com/7310DOTeth?s=20&t=KD8pTRRzL9s7wDdy2b7sHw"> <AiFillTwitterCircle/></a>
             
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 sm:animate-pulse ">
              <Image src={hannan} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-extrabold">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            As an experienced blockchain solution arrangements group, we offer assistance to organizations to boost productivity, nimbleness and security through custom blockchain advancement administrations.
            </p>
            </div>
          <div className="md:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={exchange} width={150} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold ">
                Cryptocurrency exchanges
              </h3>
              <p className="py-2">
              Our blockchain trade arrangement incorporates a full-scale cryptocurrency exchanging stage permitting for straightforward and unchanging NFT exchanges. <p id="hashLink">The exceedingly versatile and solid cloud-based exchanging stage utilizes two-factor confirmation, cold capacity, archive confirmations, analytics instruments, multi-sign wallets, and comprehensive detailing among other highlights.</p>
              </p>
              <a href="#hashLink" className="mr-2 text-blue-600">Expand</a><a href='#closelink' className="text-blue-600">hide</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={blockchain} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">
               Public & Private Blockchain
              </h3>
              <p className="py-2">
              We offer assistance companies set up Blockchain systems for their commerce and make secure decentralized databases to assist store information, <p id="hashLink-1"> oversee supply chains, handle exchanges, or any other trade needs that Blockchain can illuminate without jeopardizing security. </p>
              </p>
              <a href="#hashLink-1" className="mr-2 text-blue-600">Expand</a><a href='#closelink-1' className="text-blue-600">hide</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={vault} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Decentralized Crypto Vaults</h3>
              <p className="py-2">
              We offer arrangements for trades, institutional investors, and shippers seeking out for secure ways to execute and store huge volumes of crypto resources. <p id="hashLink-2">This hinders security compromises on reserves indeed in case the genuine servers are compromised.</p>
              </p>
              <a href="#hashLink-2" className="mr-2 text-blue-600">Expand</a><a href='#closelink-2' className="text-blue-600">hide</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={contracts} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Smart Contracts</h3>
              <p className="py-2">
              We provide all sorts of shrewd contracts that ensure the astuteness of multi-party assentions and consequently enforce fixed commitments. To form beyond any doubt there are<p id="hashLink-3"> no flaws, misbehaviors and security gaps within the shrewd contract code, we perform full-scale pre-release utilitarian and non-functional testing.</p>
              </p>
              <a href="#hashLink-3" className="mr-2 text-blue-600">Expand</a><a href='#closelink-3' className="text-blue-600">hide</a>
            </div>
            </div>
            <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={dapps} width={170} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Decentralized Apps (Dapps)</h3>
              <p className="py-2">
              We offer scrambled peer-to-peer apps with no single point of disappointment and zero downtime. Dapps combine a number of interrelated keen contracts, <p id="hashLink-4">joined together by a trade rationale and frontend. Our group builds total Dapp engineering, counting communication with oracles (information nourishes), and makes a comprehensive UX/UI plan.</p>
              </p>
              <a href="#hashLink-4" className="mr-2 text-blue-600">Expand</a><a href='#closelink-4' className="text-blue-600">hide</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={defi} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Decentralized (DeFi) Solutions</h3>
              <p className="py-2">
              With broad involvement in blockchain and fintech, our group is well-equipped to create decentralized financing arrangements from scratch, empowering <p id="hashLink-5">computerized exchanges between numerous parties. Our DeFi arrangements are greatly secure, auditable, and quick.</p>
              </p>
              <a href="#hashLink-5" className="mr-2 text-blue-600">Expand</a><a href='#closelink-5' className="text-blue-600">hide</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={nft} width={150} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Non-Fungible Token And Marketplace Development</h3>
              <p className="py-2">
              Our progressed NFT advancement administrations will assist you make special NFTs based on ERC-721 token <p id="hashLink-6">guidelines. These NFTs can be doled out to work of art, collectibles, recordings, or any other computerized resources. Our blockchain masters are too experienced in building vigorous non-fungible token marketplaces that licenses clients to purchase, offer and investigate advanced resources.</p>
              </p>
              <a href="#hashLink-6" className="mr-2 text-blue-600">Expand</a><a href='#closelink-6' className="text-blue-600">less</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={security} width={150} height={120} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Web3 Cybersecurity And Smart Contract Audit</h3>
              <p className="py-2">
              Our comprehensive Web3 Cybersecurity and Shrewd Contract Review Administrations offer assistance companies <p id="hashLink-7">dispatch and keep up complex blockchain applications. Send your savvy applications with the confirmation that your resources are totally protected from noxious assaults.</p>
              </p>
              <a href="#hashLink-7" className="mr-2 text-blue-600">Expand</a><a href='#closelink-7' className="text-blue-600">hide</a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-extrabold">Awards & Achievements</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            These awards and achievements are proof of knowledge and work that I have successfully completed. One may verify it on blockchain using mirac.eth as wallet address.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={awards01} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold ">
               Smart Contracts
              </h3>
              <p className="py-2">
              Successfully written and deployed a dynamic NFT, using Chainlink & Openzeppelin.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={awards02} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">
                Security & Hacking
              </h3>
              <p className="py-2">
                Learned tools required to build secure and immutable contracts/dapps.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={awards03} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Web3 Builder</h3>
              <p className="py-2">
                Learned and did hands on practice to get familiar with ecosystem.
              </p>
            </div>
          </div>


          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={awards04} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold ">
                Dapps
              </h3>
              <p className="py-2">
              Made dapps with both backend and frontend.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={awards05} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">
                Decentralized Dapps
              </h3>
              <p className="py-2">
              Successfully written, designed, and deployed a decentralized application using Solidity - Hardhat - Ethers.js.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={awards07} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">Smart Contract</h3>
              <p className="py-2">
              Successfully written and deployed an ERC721 Smart Contract using OpenZeppelin.
              </p>
            </div>
            </div>
            
            <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={awards08} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold ">
                Dynamic NFTs
              </h3>
              <p className="py-2">
              Successfully written and deployed a dynamic NFT using Solidity - Hardhat - Etherscan.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={awards08} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2 font-bold">
                Complex Blockchain App
              </h3>
              <p className="py-2">
              Successfully written and deployed a dynamic NFT using NFT API - NextJS - TailwindCSS.
              </p>
            </div>
   
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-extrabold">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a href="https://mirac-dex-4tiw.vercel.app/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out"
                width={"220px"}
                height={"120px"}
                layout="responsive"
                src={web1}
              />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
            <a href="https://week-7-nft-marketplace-iuf9.vercel.app/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out"
                width={"220px"}
                height={"120px"}
                layout="responsive"
                src={web2}
              />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
            <a href="https://week-7-nft-marketplace-iuf9.vercel.app/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out"
                width={"220px"}
                height={"120px"}
                layout="responsive"
                src={web3}
              />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
            <a href="https://tenzies-gules.vercel.app/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out"
                width={"220px"}
                height={"120px"}
                layout="responsive"
                src={web4}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://meme-generator-six-beta.vercel.app/" target="_blank" rel="noreferrer">
              <Image
               className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out"
               width={"220px"}
               height={"120px"}
               layout="responsive"
                src={web5}
              />
              </a>
            </div>
           
          </div>
        </section>

      </main>
    </div>
    
  );
}
