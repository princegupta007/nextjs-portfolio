import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

// Contact Messages
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Timestamp;
}

export const saveContactMessage = async (
  data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>,
) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      status: 'new',
      createdAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving contact message:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

// Call Scheduling
export interface CallSchedule {
  id?: string;
  name: string;
  email: string;
  date: string;
  time: string;
  timezone: string;
  topic: string;
  message?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: Timestamp;
}

export const scheduleCall = async (
  data: Omit<CallSchedule, 'id' | 'status' | 'createdAt'>,
) => {
  try {
    const docRef = await addDoc(collection(db, 'calls'), {
      ...data,
      status: 'scheduled',
      createdAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error scheduling call:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

// Blog Posts
export interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  published: boolean;
  readTime: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export const getBlogPosts = async (
  featured?: boolean,
  limit_count?: number,
) => {
  try {
    let q = query(
      collection(db, 'blogs'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
    );

    if (featured) {
      q = query(q, where('featured', '==', true));
    }

    if (limit_count) {
      q = query(q, limit(limit_count));
    }

    const querySnapshot = await getDocs(q);
    const posts: BlogPost[] = [];

    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as BlogPost);
    });

    return { success: true, posts };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      posts: [],
    };
  }
};

// Resources
export interface Resource {
  id?: string;
  title: string;
  description: string;
  category: string;
  type: 'download' | 'link' | 'pdf';
  format: string;
  size?: string;
  downloads?: number;
  views?: number;
  rating: number;
  tags: string[];
  image: string;
  downloadUrl: string;
  featured: boolean;
  createdAt: Timestamp;
}

export const getResources = async (category?: string, featured?: boolean) => {
  try {
    let q = query(collection(db, 'resources'), orderBy('createdAt', 'desc'));

    if (category && category !== 'All') {
      q = query(q, where('category', '==', category));
    }

    if (featured) {
      q = query(q, where('featured', '==', true));
    }

    const querySnapshot = await getDocs(q);
    const resources: Resource[] = [];

    querySnapshot.forEach((doc) => {
      resources.push({ id: doc.id, ...doc.data() } as Resource);
    });

    return { success: true, resources };
  } catch (error) {
    console.error('Error fetching resources:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      resources: [],
    };
  }
};

// Site Settings
export interface SiteSettings {
  id?: string;
  resumeUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    message: string;
  };
  updatedAt: Timestamp;
}

export const getSiteSettings = async () => {
  try {
    const docRef = doc(db, 'settings', 'site');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        success: true,
        settings: { id: docSnap.id, ...docSnap.data() } as SiteSettings,
      };
    } else {
      return { success: false, error: 'Settings not found', settings: null };
    }
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      settings: null,
    };
  }
};

// Analytics
export const trackResourceDownload = async (resourceId: string) => {
  try {
    const resourceRef = doc(db, 'resources', resourceId);
    const resourceSnap = await getDoc(resourceRef);

    if (resourceSnap.exists()) {
      const currentDownloads = resourceSnap.data().downloads || 0;
      await updateDoc(resourceRef, {
        downloads: currentDownloads + 1,
      });
    }

    // Track in analytics collection
    await addDoc(collection(db, 'analytics'), {
      type: 'download',
      resourceId,
      timestamp: Timestamp.now(),
    });

    return { success: true };
  } catch (error) {
    console.error('Error tracking download:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

export const trackPageView = async (page: string) => {
  try {
    await addDoc(collection(db, 'analytics'), {
      type: 'page_view',
      page,
      timestamp: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error tracking page view:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};
