export interface TeamSectionProps {
  title: string;
  subtitle: string;
  founder: FounderData;
  teamMembers: TeamMember[];
}

export interface FounderData {
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
}

export interface TeamMember {
  title: string;
  role: string;
  image: string;
  bio: string;
  specialties?: string[];
}
