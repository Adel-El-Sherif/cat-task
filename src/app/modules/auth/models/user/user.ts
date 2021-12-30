export interface User {
    access_token?: string | undefined,
    token_type?: string,
    user?: {
      id?: number,
      name?: string,
      email?: string,
      email_verified_at?: string | null,
      user_type?: string,
      created_at?: string,
      updated_at?: string
    },
    expires_in?: number
}
