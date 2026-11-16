
import { StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const announcements: Announcement[] = [
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
    read: true,
  },
  {
    id: '3',
    title: 'Class Suspension Notice',
    category: 'Notice',
    read: false,
  },
];

export default function HomeScreen() {
  const unreadAnnouncements = getUnreadAnnouncements(announcements);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Connect</Text>

      <Text style={styles.subtitle}>
        Unread Announcements: {unreadAnnouncements.length}
      </Text>

      {unreadAnnouncements.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Category: {item.category}</Text>
          <Text>Status: Unread</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
