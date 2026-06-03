/**
 * AKSUM CHRONICLE — ARCHIVE DATA COLLECTION
 * 
 * To publish new history books, manuscripts, maps, or records:
 * 1. Copy the template block below.
 * 2. Paste it inside the ARCHIVES_DATA array.
 * 3. Fill out the details (title, description, links, etc.).
 * 4. Save and push/commit the changes to GitHub.
 * 
 * -------------------------------------------------------------------
 * TEMPLATE BLOCK:
 * 
 * {
 *   title: "Name of the Book or Manuscript",
 *   description: "A short description of what this item contains.",
 *   category: "Manuscripts", // Options: Manuscripts, Diplomatic Records, Cartography, Religious Manuscripts, etc.
 *   dynasty: "Kingdom of Aksum", // Dynasty or period
 *   date: "4th Century", // Estimated date
 *   type: "PDF Collection", // Options: PDF Collection, Archive Folder, Map Archive, Digital Codices, etc.
 *   drive: "https://drive.google.com/...", // Link to Google Drive folder/file
 *   preview: "https://drive.google.com/...", // Link to preview
 *   freePages: 5, // Number of free pages (0 = premium only, 5 = default, change if needed)
 * },
 * 
 * IMPORTANT: freePages defaults to 5 if not specified. 
 * Set to 0 if the archive should be premium-only.
 * 
 * -------------------------------------------------------------------
 */

const ARCHIVES_DATA = [
  {
    title: "Royal Aksumite Correspondence",
    description: "Imperial diplomatic manuscripts documenting trade, royal decrees, and ecclesiastical correspondence.",
    category: "Manuscripts",
    dynasty: "Kingdom of Aksum",
    date: "4th Century",
    type: "PDF Collection",
    drive: "https://drive.google.com/file/d/1MIn7QrfgbhJny6NHeswsdw950eZLLYeW/view?usp=sharing",
    preview: "https://drive.google.com/file/d/1MIn7QrfgbhJny6NHeswsdw950eZLLYeW/view?usp=sharing",
    freePages: 0
  },
  {
    title: "Byzantine–Makurian Diplomatic Archives",
    description: "Historical archives detailing political and religious interactions between Makuria and Byzantium.",
    category: "Diplomatic Records",
    dynasty: "Makuria",
    date: "9th Century",
    type: "Archive Folder",
    drive: "https://drive.google.com/file/d/1f9ctbQDlwVpjFhLl6if-6DN18mpTF8pJ/view?usp=sharing",
    preview: "https://drive.google.com/file/d/1f9ctbQDlwVpjFhLl6if-6DN18mpTF8pJ/view?usp=sharing",
    freePages: 5
  },
  {
    title: "Ethiopian Imperial Cartography",
    description: "Digitized trade routes, maritime atlases, and reconstructed Horn of Africa geopolitical maps.",
    category: "Cartography",
    dynasty: "Solomonic Dynasty",
    date: "12th Century",
    type: "Map Archive",
    drive: "https://drive.google.com/file/d/1IF54f2EXBPF4Yw7HqQEKaFmPVlkqrezL/view?usp=sharing",
    preview: "https://drive.google.com/file/d/1IF54f2EXBPF4Yw7HqQEKaFmPVlkqrezL/view?usp=sharing",
    freePages: 5
  },
  {
    title: "Solomonic Dynasty Manuscripts",
    description: "Illuminated codices, theological manuscripts, and imperial court records.",
    category: "Religious Manuscripts",
    dynasty: "Solomonic Dynasty",
    date: "14th Century",
    type: "Digital Codices",
    drive: "https://drive.google.com/file/d/1kMNS6pxTZDAv3QQjxr-7FynhiHQiXe0n/view?usp=sharing",
    preview: "https://drive.google.com/file/d/1kMNS6pxTZDAv3QQjxr-7FynhiHQiXe0n/view?usp=sharing",
    freePages: 5
  }
];
