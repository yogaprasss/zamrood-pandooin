import type { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseDestinationData {
  success: boolean;
  message: string;
  code: number;
  data: DestionationData[] | undefined
};

interface DestionationData {
  itinerary_id: string;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: string;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: RelatedGallery[];
  related_variant: RelatedVariant;
}

interface RelatedGallery {
  itinerary_id: string;
  gallery_id: number;
  gallery_alt_text: string;
  gallery_path: string;
  src: string;
  title: string;
}

interface RelatedVariant {
  itinerary_id: string;
  itinerary_variant_id: number;
  itinerary_variant_pub_price: string;
  itinerary_variant_disc_price: string;
  unit_name: string;
  related_unit: null;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseDestinationData>) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + 'itinerary?highlight=true';
    const result = await fetch(url);
    const data = await result.json() as ResponseDestinationData;
    if (result && data) {
      // Simulate more data (becuase 3 given data is not enough to simulate small card on the bottom)
      const newData = {...data, data: [...data.data!, ...data.data!, ...data.data!]};
      res.status(200).json(newData);
    }
    else res.status(400).json({ success: false, message: 'error', code: 400, data: undefined });
  } catch (error) {
    res.status(400).json({ success: false, message: 'error', code: 400, data: undefined });
  }
}

export default handler;
