export interface Database {
  public: {
    Tables: {
      inquiry: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          domain: string
          created_at: string
          is_replied: boolean
          replied_at: string | null
          reply_message: string | null
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          domain: string
          created_at?: string
          is_replied?: boolean
          replied_at?: string | null
          reply_message?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          domain?: string
          created_at?: string
          is_replied?: boolean
          replied_at?: string | null
          reply_message?: string | null
        }
      }
      gallery: {
        Row: {
          id: string
          image_url: string
          caption: string | null
          alt_text: string | null
          domain: string
          display_order: number
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          image_url: string
          caption?: string | null
          alt_text?: string | null
          domain: string
          display_order?: number
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          image_url?: string
          caption?: string | null
          alt_text?: string | null
          domain?: string
          display_order?: number
          is_active?: boolean
          created_at?: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string | null
          slug: string | null
          domain: string
          status: string
          published_at: string | null
          created_at: string
          updated_at: string
          views: number
          featured_image: string | null
          tags: string[] | null
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt?: string | null
          slug?: string | null
          domain: string
          status?: string
          published_at?: string | null
          created_at?: string
          updated_at?: string
          views?: number
          featured_image?: string | null
          tags?: string[] | null
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string | null
          slug?: string | null
          domain?: string
          status?: string
          published_at?: string | null
          created_at?: string
          updated_at?: string
          views?: number
          featured_image?: string | null
          tags?: string[] | null
        }
      }
      admin_users: {
        Row: {
          id: string
          email: string
          password_hash: string
          name: string
          role: string
          domain: string | null
          is_active: boolean
          last_login: string | null
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          name: string
          role?: string
          domain?: string | null
          is_active?: boolean
          last_login?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          name?: string
          role?: string
          domain?: string | null
          is_active?: boolean
          last_login?: string | null
          created_at?: string
        }
      }
    }
  }
}