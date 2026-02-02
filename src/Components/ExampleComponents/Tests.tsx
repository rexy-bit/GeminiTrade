import type { userInput } from "../../Contexts/Types";
import Test from "../Test";
import ExampleCard from "./ExampleCard";
import TestCard from "./TestCard";


const Tests = () => {

   

 const exampleTests: userInput[] = [
  {
    productName: "Drone with HD Camera",
    country: "Italy",
    ficheTech: `The Drone with HD Camera is a quadcopter designed for recreational and semi-professional aerial photography, model QDR-450. It features a 4K HD camera with a 120° wide-angle lens, GPS-assisted flight stabilization, and a maximum flight time of 25 minutes. The drone weighs 1.5 kg, has a control range of up to 5 km, and includes automated flight modes such as orbit, follow-me, and waypoint navigation. Power is supplied by a 3S Li-Po battery with a quick-charging system. It operates in environmental temperatures of -10°C to 40°C and humidity levels of 10%–85%. Key features include precise gyro stabilization, lightweight ergonomic frame, foldable design, and mobile app control. Users should follow local aviation regulations, avoid no-fly zones, and ensure firmware is up to date. CE compliant.`,
    decret: `In Italy, drones are regulated by ENAC under the “Regolamento mezzi aerei a pilotaggio remoto (APR)” which governs civil remote-controlled aircraft. Recreational drones weighing over 250 g require registration and must adhere to maximum altitude limits, no-fly zones, and privacy regulations. Operators must maintain line-of-sight, respect distance from people and property, and follow flight restrictions near airports and sensitive areas. Certain drones equipped with cameras may require additional authorizations for data collection or commercial use.`
  },
  {
    productName: "Medical Infrared Thermometer",
    country: "China",
    ficheTech: `The Medical Infrared Thermometer is a non-contact infrared thermometer for human body measurement, model MIT-2026. It has a measurement range of 32°C to 42.5°C (89.6°F – 108.5°F) with an accuracy of ±0.2°C (±0.4°F) and a response time of ≤ 1 second. The device features a 1:1.5 distance-to-spot ratio, a digital LCD display with backlight, selectable Celsius/Fahrenheit units, and memory function storing the last 32 readings. Powered by 2 AAA batteries with auto power-off after 30 seconds, it operates in environments of 10°C–40°C and 15%–85% humidity, and can be stored at -20°C–55°C and 10%–90% humidity. It is CE, ISO 13485, and RoHS compliant. Key features include quick, hygienic non-contact measurement, fever alarm, lightweight ergonomic design, and suitability for home and clinical use. Users should keep the sensor clean, avoid direct sunlight, and note that readings may vary under different environmental conditions; it is not intended for industrial or veterinary applications or for newborns under 3 months without supervision.`,
    decret: `In China, medical devices are regulated by the National Medical Products Administration (NMPA). Imported medical thermometers require registration, certification, and an import license. Only certified distributors may import or sell medical devices, and products must comply with CFDA standards including quality, labeling, and safety. Non-compliant products are prohibited from importation.`
  },
  {
    productName: "Smart Watch with ECG",
    country: "United Kingdom",
    ficheTech: `The Smart Watch with ECG, model ECG-360, is a wearable device that monitors heart activity and general health metrics. It features Bluetooth 5.0 connectivity, an ECG sensor, continuous heart rate monitoring, blood oxygen measurement, sleep tracking, and compatibility with iOS and Android devices. The device has a 1.3-inch OLED touchscreen, rechargeable lithium-ion battery with 7 days of typical use, waterproof rating IP68, and provides notifications, alarms, and activity tracking. Key features include ECG monitoring, multi-sport modes, real-time health alerts, and integration with mobile health apps. Users should follow device calibration procedures, avoid magnetic interference, and not rely solely on the device for medical diagnosis. CE and UKCA compliant.`,
    decret: `In the United Kingdom, wearable devices with ECG functionality are considered medical devices under the MHRA Medical Device Regulations 2002 and require UKCA marking. Importation, distribution, or sale of ECG-enabled smart watches is subject to device registration, compliance with safety and performance standards, and potential inspection by authorities. Non-compliant devices may not be imported or sold, and operators must follow labeling, reporting, and post-market surveillance obligations.`
  }
];



    return(
        <div className="w-full mt-15 flex flex-col justify-center items-center">
            <h1 className="text-[2em] text-gray-100 font-bold text-center">Try it Yourself</h1>
            <h2 className="text-gray-100 text-[18px] font-[600] mt-5 text-center">Test our AI with real scenarios using these suggested inputs</h2>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
                {exampleTests.map((t)=>{
                    return(
                    <TestCard test={t} key={t.productName}/>
                    );
                })}
            </div>

        </div>
    )
}

export default Tests;