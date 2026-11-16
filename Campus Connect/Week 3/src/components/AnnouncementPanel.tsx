
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AnnouncementCard from './AnnouncementCard';
import type { Announcement } from '../../types/announcement';

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: '1',
      title: 'Enrollment Schedule',
      category: 'Academic',
      read: false,
    },
    {
      id: '2',
      title: 'Campus Sports Festival',
      category: 'Events',
      read: false,
    },
    {
      id: '3',
      title: 'Class Suspension Notice',
      category: 'Notice',
      read: true,
    },
  ]);

  const unreadCount = announcements.filter(
    (item) => !item.read
  ).length;

  const handleMarkRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((item) =>
        item.id === id
          ? { ...item, read: !item.read }
          : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Announcements
      </Text>

      <Text style={styles.counter}>
        Unread Announcements: {unreadCount}
      </Text>

      {announcements.map((item) => (
        <AnnouncementCard
          key={item.id}
          title={item.title}
          category={item.category}
          read={item.read}
          onMarkRead={() => handleMarkRead(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  counter: {
    fontSize: 16,
    marginBottom: 16,
    color: '#2563eb',
    fontWeight: '600',
  },
});
