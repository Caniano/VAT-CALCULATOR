export interface BillData {
    subtotal: number | null;
    tax: number | null;
    total: number;
    currency: string;
    fullText: string;
}

// New type for a saved bill, includes image data for re-display
export interface StoredBill {
    id: string;
    imageBase64: string;
    mimeType: string;
    billData: BillData;
    createdAt: string; // ISO string for date
    fileName: string; // To show the original file name
}

// New type for a user in the system
export interface User {
    email: string;
}
