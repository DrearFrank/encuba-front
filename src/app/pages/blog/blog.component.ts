import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  categories = ['Technology', 'Health', 'Lifestyle', 'Education', 'Travel'];

  posts = [
    {
      title: 'Post Title 1',
      author: 'John Doe',
      date: 'January 1, 2024',
      tags: ['Tech', 'AI'],
      description: 'This is a short description of the blog post.'
    },
    {
      title: 'Post Title 2',
      author: 'Jane Smith',
      date: 'February 5, 2024',
      tags: ['Health', 'Wellness'],
      description: 'This blog post covers various aspects of maintaining a healthy lifestyle.'
    }
  ];

  messages = [
    { user: 'John', text: 'Hey, has anyone tried the new tech from XYZ?' },
    { user: 'Jane', text: 'Yes! It\'s amazing. Totally worth checking out.' }
  ];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ user: 'You', text: this.newMessage });
      this.newMessage = '';
    }
  }
}
