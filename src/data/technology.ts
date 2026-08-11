import { IMAGES } from "./images";

export interface TechnologyItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  patientBenefit: string;
  image: string;
  specs: string[];
}

export const technologyList: TechnologyItem[] = [
  {
    id: "3d-intraoral-scanner",
    title: "3D Digital Intraoral Scanner",
    category: "Digital Imaging",
    tagline: "No Messy Impression Trays",
    description: "Captures 6,000 high-definition 3D color scans per second, creating precise digital models of your teeth in under 60 seconds.",
    patientBenefit: "100% gag-free, ultra-comfortable digital impressions with instant 3D smile preview.",
    image: IMAGES.technology.scanner3D,
    specs: ["0.01mm Micron Precision", "Real-time 3D Color Capture", "Immediate AI Analysis"],
  },
  {
    id: "3d-cbct-xray",
    title: "Cone Beam 3D CBCT Scanner",
    category: "3D Diagnostics",
    tagline: "Sub-Millimeter Anatomical Accuracy",
    description: "Low-radiation 3D X-ray imaging system providing 360-degree cross-sectional views of bone density, nerve paths, and root structures.",
    patientBenefit: "Safe, 90% lower radiation than conventional CT, ensuring pinpoint implant placement.",
    image: IMAGES.technology.cbctXray,
    specs: ["Sub-Millimeter Resolution", "Low Dose Radiation Mode", "Virtual Surgical Planning"],
  },
  {
    id: "laser-dentistry",
    title: "Diode Dental Laser System",
    category: "Laser Surgery",
    tagline: "Bloodless, Needle-Free Gum Care",
    description: "High-precision laser technology for painless gum contouring, disinfection, treatment of canker sores, and accelerated teeth whitening.",
    patientBenefit: "No scalpels, minimal bleeding, faster healing, and virtually zero post-treatment discomfort.",
    image: IMAGES.technology.laserDentistry,
    specs: ["Dual Wavelength Control", "Instant Tissue Hemostasis", "Painless Sterilization"],
  },
  {
    id: "cad-cam-cerec",
    title: "CAD/CAM Single-Visit Restorations",
    category: "Digital Prosthetics",
    tagline: "Custom Crowns in One Appointment",
    description: "Computer-aided design and 3D milling unit that crafts 100% biocompatible ceramic crowns, veneers, and inlays while you wait.",
    patientBenefit: "Get your permanent crown fitted in a single visit without temporary crowns or extra visits.",
    image: IMAGES.technology.cadcam,
    specs: ["5-Axis High Precision Milling", "Monolithic Zirconia & E.max", "Custom Color Matching"],
  },
  {
    id: "b-class-sterilization",
    title: "Hospital-Grade B-Class Autoclave",
    category: "Infection Control",
    tagline: "100% Hospital Sterilization Assurance",
    description: "Vacuum autoclave sterilization system compliant with European EN13060 standards, ensuring zero cross-contamination.",
    patientBenefit: "Complete peace of mind knowing all instruments undergo multi-stage pressure sterilization.",
    image: IMAGES.technology.sterilizationUnit,
    specs: ["Triple Vacuum Pulses", "Biological Indicator Testing", "Pouched Single-Use Kits"],
  },
  {
    id: "digital-smile-design",
    title: "Digital Smile Design (DSD) Suite",
    category: "Cosmetic Planning",
    tagline: "Test-Drive Your New Smile First",
    description: "Facial analysis software combining digital photography, video, and facial proportions to design a bespoke smile.",
    patientBenefit: "See and test-drive your exact new smile on your own face before treatment begins.",
    image: IMAGES.technology.digitalSmileDesign,
    specs: ["Golden Ratio Smile Mapping", "3D Printed Trial Smile", "Facial Harmony Integration"],
  },
];
