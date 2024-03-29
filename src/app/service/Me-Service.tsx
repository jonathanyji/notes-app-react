import { useUser } from '@auth0/nextjs-auth0/client';

export const MeService = {

  getAuthUser: async () => {
    const { user } = useUser();
    console.log("USER: ", user)
    return user;
  },

  getTokenResponseHeader: async (user: any): Promise<TokenResponseHeader> => {
    try {
      const response = await fetch('http://localhost:3000/api/token',
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Error fetching response header');
    }
  }
}


export interface TokenResponseHeader {
  access_token: string;
  token_type: string;
}