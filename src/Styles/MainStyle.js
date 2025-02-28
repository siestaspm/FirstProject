import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 10,
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: '#eee',
    margin: 10,
    padding: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'contain',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#eee',
    margin: 10,
    padding: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
  },
  content: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inAppContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#8A2BE2',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 39,
  },
  desc: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: '#808080',
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-around',
  },
  button: {
    width: '48%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    marginTop: 10,
    backgroundColor: '#0066cc',
    borderRadius: 10,
    padding: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText1: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  facebook: {
    backgroundColor: '#4267B2',
  },
  inapp: {
    backgroundColor: '#4267B2',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  google: {
    backgroundColor: '#DB4437',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerButton: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileAge: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  friendButton: {
    backgroundColor: '#E5F1FF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  friendButtonText: {
    color: '#3498DB',
    fontSize: 16,
  },
  matchButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  matchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    margin: 20,
    width: '80%',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 16,
    color: '#FFD700',
  },
});
