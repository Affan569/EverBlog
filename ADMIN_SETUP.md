# Admin User Setup Instructions

## Admin Credentials

To access the admin panel, use these credentials:

- **Username**: `admin123` (or email: `admin123@everblog.com`)
- **Password**: `admin123`

You can use either the username `admin123` or the full email `admin123@everblog.com` to log in.

## Step-by-Step Setup

### 1. Enable Email/Password Authentication in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** → **Sign-in method**
4. Enable **Email/Password** provider
5. Click **Save**

### 2. Create Admin User in Firebase Console

1. In Firebase Console, go to **Authentication** → **Users**
2. Click **Add user**
3. Enter:
   - **Email**: `admin123@everblog.com`
   - **Password**: `admin123`
4. Click **Add user**

### 3. Configure Environment Variables

In your `.env` file, add:

```env
ADMIN_EMAILS=admin123@everblog.com
```

This tells the admin panel that `admin123@everblog.com` is authorized to access the admin panel.

### 4. Access the Admin Panel

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/login`
3. Enter your credentials:
   - Username: `admin123` (or email: `admin123@everblog.com`)
   - Password: `admin123`
4. Click **Sign in**

## Important Security Notes

⚠️ **For Development Only**: The credentials `admin123/admin123` are simple and should only be used for development.

### For Production:

1. **Change the admin email** to a real email address you own
2. **Use a strong password** when creating the user in Firebase Console
3. **Update the ADMIN_EMAILS** environment variable with your real email
4. **Enable additional security** in Firebase Console:
   - Email verification
   - Rate limiting
   - IP restrictions (if needed)

### To Change Admin Credentials:

1. In Firebase Console → Authentication → Users, delete the old user
2. Create a new user with your desired email and strong password
3. Update `ADMIN_EMAILS` in your `.env` file with the new email
4. Restart your development server

## Troubleshooting

### "Access denied. Unauthorized username/email"
- Make sure the username/email you're using matches what's in `ADMIN_EMAILS`
- If using username, it will be converted to `username@everblog.com`
- Check that the environment variable is set correctly
- Restart the development server after changing environment variables

### "User not found"
- Verify the user was created in Firebase Console
- The system creates the full email as `username@everblog.com`
- Make sure you created the user with email `admin123@everblog.com` in Firebase Console
- Ensure Email/Password authentication is enabled in Firebase Console

### "Incorrect password"
- Double-check the password in Firebase Console
- If you forgot the password, you can reset it in Firebase Console (Authentication → Users → User → ⋮ → Reset password)