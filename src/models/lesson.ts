interface externalDocument {
  name: string;
  link: string;
}

export interface lessonI {
  title: string;
  incompletedUrl?: string;
  completedUrl?: string;
  originalIncompletedUrl?: string;
  verseToMemorize?: string;
  img: string;
  videos: string[];
  externalDocuments?: externalDocument[];
}
