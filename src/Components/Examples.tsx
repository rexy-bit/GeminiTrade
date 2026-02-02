import { memo } from "react"
import type { Example } from "../Contexts/Types";
import ExampleCard from "./ExampleComponents/ExampleCard";
import Tests from "./ExampleComponents/Tests";


const Examples = () => {

    const examples : Example[] = [
        {
            name : "cnReach™ N500 450 MHz ETSI RED radio",
            country : "Algeria",
            fiche : "The cnReach™ N500 450 MHz ETSI RED radio is a long-range industrial wireless solution designed for outdoor critical infrastructure operations, enabling reliable and secure transmission of monitoring and control data from remote sensors and RTU/PLC systems to central operations centers. Built for large geographic areas, hard-to-reach terrain, and challenging spectrum environments, it supports real-time decision-making across industries such as energy, water, petrochemical, and transportation. The N500 simplifies the transition from legacy serial and I/O systems to modern IP and Ethernet networks, offers strong security with AES encryption, and supports multiple deployment topologies (point-to-point, point-to-multipoint, and back-to-back relay). Fully integrated with the cnMaestro™ management platform, it provides centralized monitoring and efficient end-to-end Industrial IoT connectivity.",
            decret : "The regulation establishes strict rules for the importation of sensitive equipment in Algeria, particularly technologies that may impact national security, public order, or the management of telecommunications networks. It covers radio and telecommunications equipment, satellite and geolocation systems, cryptographic technologies, SIM cards, drones and light aircraft, special vehicle signaling devices, as well as security, surveillance, inspection, optical, and public-order equipment. Importation of these items is subject to authorization, technical controls, or specific exclusions, with the objective of protecting the radio spectrum, information systems, and overall national security.",
            aiResponse : {
                status : " IMPORTABLE",
                resume : "The cnReach™ N500 450 MHz ETSI RED radio is an industrial-grade long-range wireless communication device featuring AES encryption and supporting critical infrastructure monitoring.",
                reasons: "Algerian regulations classify radio-telecommunications equipment and devices with cryptographic capabilities (AES encryption) as sensitive equipment. While not prohibited, importation requires prior 'Homologation' (Type Approval) from the ARPCE (Autorité de Régulation de la Poste et des Communications Électroniques) and specific authorizations related to the use of the 450 MHz frequency band and encryption protocols to ensure national security and spectrum compliance.",
                sensitivePart: "450 MHz radio frequency module and AES cryptographic technology.",
                advices : [
                    "Obtain Type Approval (Homologation) from the ARPCE before initiating the shipment to avoid customs seizure.",
                    "Apply for a specific cryptographic authorization if the AES encryption implementation falls under the 'sensitive' category defined by Algerian security services.",
                    "Prepare a detailed 'End-User Certificate' (EUC) and technical dossier explaining the industrial application (e.g., energy or water utility) to justify the need for long-range radio equipment.",
                    "Consult with a local licensed importer or customs broker who specializes in 'sensitive' electronic equipment in Algeria."
                ]
            }
        },{
            name : "OMNIDIRECTIONAL ANTENNA UHF 420-450 MHz",
            country : "United States",
            fiche : "The T-OC420/450.05 UHF omnidirectional antenna is designed to operate in the 420–450 MHz frequency band, providing 360° coverage for professional and industrial radio communication systems. It features a 50-ohm impedance, low VSWR (< 1.6) for efficient signal transmission, and vertical polarization to ensure optimal compatibility with UHF networks. With a 5 dBi gain, 100 W maximum power handling, and a 22° beamwidth, the antenna delivers stable and reliable performance. Built for outdoor use, it offers high wind resistance (up to 180 km/h), operates in extreme temperatures (-40 °C to +85 °C), supports mast mounting from 33 to 60 mm in diameter, and includes a DC-grounded design with a condensation drain hole for enhanced durability and safety.",
            decret : "Sensitive telecommunications equipment, cryptographic devices, and related technologies are regulated under U.S. law through the Export Administration Regulations (EAR), the Federal Communications Commission (FCC), and, for military or dual-use items, ITAR. Equipment such as radios, satellite communications devices, wireless transmitters, and encryption systems may require licenses or authorization for import, export, or use, depending on their technical capabilities and potential national security risk. The FCC can block or restrict devices that pose a threat to U.S. networks, while encryption hardware and software are subject to export control and licensing requirements. Public-use devices, low-risk cryptography, and standard consumer equipment are generally exempt.",
            aiResponse : {
                status : " IMPORTABLE",
                resume : "The OMNIDIRECTIONAL ANTENNA UHF 420-450 MHz (T-OC420/450.05) is a passive radio frequency component designed for professional and industrial communication. It is a standard hardware item used in telecommunications infrastructure.",
                reasons: "Passive antennas are generally not subject to the strict FCC Equipment Authorization procedures required for active transmitters (like Certification or SDoC). Since this device does not contain internal circuitry for generating or modulating radio signals, it is treated as a component. It does not contain encryption or cryptographic hardware that would trigger EAR or ITAR restrictions under normal industrial use cases. The frequency range (420-450 MHz) is a standard band used in the U.S. for Amateur Radio (70cm band) and certain Federal/Industrial applications.",
                sensitivePart: "The specific frequency range (420-450 MHz) is the only point of interest, as it overlaps with U.S. Government radiolocation (radar) and Licensed Amateur Radio services, meaning the use of the device—rather than the device itself—is regulated by the FCC.",
                advices : [
                    "Classify the product under HTS Code 8517.71.0000 (Antennas and antenna reflectors of all kinds; parts suitable for use therewith).",
                    "Confirm that the manufacturer is not on the FCC 'Covered List' (entities deemed a threat to national security under the Secure and Trusted Communications Networks Act).",
                    "Ensure that the end-use of the antenna is in compliance with FCC Part 15, Part 90, or Part 97 regulations, as a license is typically required to transmit within the 420-450 MHz band in the United States."
                    
                ]
            }
        },{
            name : "Medical Infrared Thermometer",
            country : "France",
            fiche : "The Medical Infrared Thermometer is a non-contact infrared thermometer for human body measurement, model MIT-2026. It has a measurement range of 32°C to 42.5°C (89.6°F – 108.5°F) with an accuracy of ±0.2°C (±0.4°F) and a response time of ≤ 1 second. The device features a 1:1.5 distance-to-spot ratio, a digital LCD display with backlight, selectable Celsius/Fahrenheit units, and memory function storing the last 32 readings. Powered by 2 AAA batteries with auto power-off after 30 seconds, it operates in environments of 10°C–40°C and 15%–85% humidity, and can be stored at -20°C–55°C and 10%–90% humidity. It is CE, ISO 13485, and RoHS compliant. Key features include quick, hygienic non-contact measurement, fever alarm, lightweight ergonomic design, and suitability for home and clinical use. Users should keep the sensor clean, avoid direct sunlight, and note that readings may vary under different environmental conditions; it is not intended for industrial or veterinary applications or for newborns under 3 months without supervision.",
            decret : "In France, sensitive telecommunications, cryptographic equipment, and related technologies are regulated under national laws and EU frameworks that control their importation, supply, and use. Telecommunications and radio devices that include cryptographic functions are subject to regulatory requirements with the Agence Nationale de la Sécurité des Systèmes d’Information (ANSSI), which requires declarations or authorizations for the importation and provision of cryptographic means, depending on their technical characteristics and functions. Means of cryptology must be declared to ANSSI before import, and in some cases require formal authorization, while simpler or consumer‑grade cryptographic products may be exempt. Additionally, dual‑use goods (products with both civilian and military applications, including certain telecom and encryption technologies) are controlled under European regulations and French export control systems, which can involve licensing or other restrictions on import and supply.",
            aiResponse : {
                status : " IMPORTABLE",
                resume : "The MIT-2026 Medical Infrared Thermometer is a standard non-contact medical diagnostic tool. It is compliant with essential EU standards (CE, ISO 13485, RoHS) and does not contain advanced telecommunications or cryptographic features.",
                reasons: "The product is importable because it holds the necessary CE marking and ISO 13485 certification required for medical devices in the European Union. Although the provided decree mentions strict regulations for cryptographic and telecommunications equipment, this specific thermometer lacks wireless connectivity (Bluetooth/Wi-Fi) or encryption modules, meaning it does not fall under ANSSI's restrictive scope for cryptographic means. It complies with RoHS for hazardous substances, making it suitable for the French market.",
                sensitivePart: "",
                advices : [
                    "Ensure the CE Declaration of Conformity (DoC) is updated to the latest Medical Device Regulation (EU) 2017/745 (MDR) standards.",
                    "Verify that all packaging, labeling, and user manuals are translated into French, as required by the Loi Toubon for products sold in France.",
                    "Confirm the presence of a European Authorized Representative (EC REP) on the packaging if the manufacturer is based outside the European Union.",
                    "Maintain a technical file ready for inspection by French customs (Douane) or the ANSM (National Agency for the Safety of Medicines and Health Products)."
                    
                ]
            }
        }
    ]


    return(
        <section className="flex flex-col w-full bg-[#0B1220] p-15">
           <h1 className="text-gray-100 text-[2em] font-bold mt-5">Real Import Analysis Examples</h1>
           <h2 className="text-[1.2em] text-gray-200 text-[17px] font-[600] mt-5">Pre-analyzed products using Gemini AI — and ready-to-use test cases for you</h2>

           <div className="flex flex-col justify-center items-center">
              <h3 className="text-gray-100 text-[25px] font-bold mt-7">Pre-Analyzed Examples</h3>
              <div className="flex flex-wrap justify-center items-center mt-15 gap-10">
                  {examples.map((ex)=>{
                    return(
                        <ExampleCard key={ex.name} ex={ex}/>
                    )
                  })}
              </div>

           </div>

           <Tests/>

        </section>
    )
}


export default memo(Examples);