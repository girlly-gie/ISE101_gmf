
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { AnnouncementCategory } from '../../types/announcement';

interface AnnouncementCardProps {
  title: string;
  category: AnnouncementCategory;
  read: boolean;
  onMarkRead: () => void;
}

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.category}>
        Category: {category}
      </Text>

      <Text style={styles.status}>
        Status: {read ? 'Read' : 'Unread'}
      </Text>

      <Pressable style={styles.button} onPress={onMarkRead}>
        <Text style={styles.buttonText}>
          {read ? 'Mark as Unread' : 'Mark as Read'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  category: {
    fontSize: 14,
    color: '#555555',
  },
  status: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 10,
    borderRadius: 6,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
