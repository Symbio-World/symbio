/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Home } from './app/home';
import { name as appName } from './app.json';
import { ScanditModule } from 'scandit-react-native'

ScanditModule.setAppKey('AUqOHwnFFxJTGIN5mAKlgV8h39u5OGnoUH9B25RatWMBGa/f/Upv+cp9fShvWu8/xG1gjvdhjFAIfiumeURAklxhvyMVTwJdnieiiyNpmenpNz5XRkhd449+HuniJ0Je2jR6teMZAixBwLgiAGmJ9wz3dBkAdB/4J/q1cHVyvZq9K9Np2N1i+cU6qh0cMZRkV4q2ZyW9rfUFxE0viXOuA9iDF3VG8ceLqA0Zz4DtqkpuSFGs0RmBAHWhDuOHhWgfpBfybojVVWknUfkmO14nLzqNkTxa7tcKzBEJJ5jrwjwnZMWVZQxI/oE2y34WOpHzP9N9XmYvcC/OPbjvRNxqUs+MmQu7Cz6A+gcXa+ulVazFY02IyK35O6dEMbgq79ncIvzaeb0lShgEQV9Ds6C+925k8JxPqe6N6qTDJ3Ny2bfsVk5VFZFXqe3LhxAxGXgdT37AhWjEjRJ+/bi/DQq0CclQclgsfkSOb7SG4M+rfYVXVIhzHM67HC0exzh0fAGgIAZb5FSQInWamftYsVWzx1g0Q+QCryrguvSaIQMs1zHEXIa48QxtR/f0pXwxYq2TqsElz/9/oDfjLVLHbikpm7CCpBTqY5gKHVCzNFznuEH0EKzAnXrGVjsDpVvIpIAHPJwsCnWM23LHYlIILHh/lQ7OvBVvXRQayejp47cMWeOEXWhm9jPI6UDLaC7KyvmixOSZcqLJJrWxxGF4qQNOwKPHt1eZ12sYL9FZsFGYhMEuEXf9m0sdp/g7/Uc7++zPH0LvBn/jVImDaaYBCEnXuNce5+5qfs1qtX1D+qCRtl/1B04QPDv35g==');

AppRegistry.registerComponent(appName, () => Home);
