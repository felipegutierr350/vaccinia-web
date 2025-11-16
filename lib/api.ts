import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://web-production-28995.up.railway.app';

export interface PatientProfile {
  age?: number;
  sex?: 'M' | 'F';
  pregnant?: boolean;
  immunocompromised?: boolean;
  chronic_conditions?: string;
}

export interface ChatRequest {
  question: string;
  patient_profile?: PatientProfile;
}

export interface VaccineSource {
  vaccine: string;
  section: string;
  content_preview: string;
  source_file: string;
}

export interface ChatResponse {
  answer: string;
  confidence: 'high' | 'medium' | 'low';
  sources: VaccineSource[];
  recommendations: any;
  timestamp: string;
}

export const vaccineAPI = {
  async chat(request: ChatRequest): Promise<ChatResponse> {
    const response = await axios.post(`${API_URL}/chat`, request);
    return response.data;
  },

  async getVaccines(): Promise<{ total: number; vaccines: string[] }> {
    const response = await axios.get(`${API_URL}/vaccines`);
    return response.data;
  },
};
