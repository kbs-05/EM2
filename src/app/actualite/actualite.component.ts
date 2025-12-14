import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Firestore, collection, collectionData, query, orderBy, limit, DocumentData } from '@angular/fire/firestore';

interface ContentBlock {
  type: 'text' | 'image';
  id: string;
  content: string;
}

interface Actualite {
  id?: string;
  title: string;
  excerpt: string;
  category: 'Annonce' | 'Événement' | 'Urgence' | 'Résultats' | 'Maintenance';
  date: string;
  featuredImage: string;
  images: string[];
  content: ContentBlock[];
  published: boolean;
}

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  standalone: false,
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  actualite$!: Observable<Actualite | null>;

  // Nouvelle propriété pour lightbox
  selectedImage: string | null = null;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const actualitesRef = collection(this.firestore, 'actualites');
    const q = query(actualitesRef, orderBy('date', 'desc'), limit(1));

    this.actualite$ = collectionData(q, { idField: 'id' }).pipe(
      map((docs: DocumentData[]) => {
        if (!docs.length) return null;
        const doc = docs[0];
        if (!doc['published']) return null;

        return {
          id: doc['id'],
          title: doc['title'],
          excerpt: doc['excerpt'],
          category: doc['category'],
          date: doc['date'],
          featuredImage: doc['featuredImage'],
          images: doc['images'] || [],
          content: doc['content'] || [],
          published: doc['published']
        } as Actualite;
      })
    );
  }

  // Méthodes pour ouvrir/fermer la lightbox
  openLightbox(url: string) {
    this.selectedImage = url;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

}
