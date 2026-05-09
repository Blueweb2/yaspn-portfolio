export interface IService {
  _id?: string;

  title: string;

  slug?: string;

  description: string;

  icon?: string;

  image?: string;

  featured?: boolean;

  order?: number;

  isActive?: boolean;

  createdAt?: string;

  updatedAt?: string;
}