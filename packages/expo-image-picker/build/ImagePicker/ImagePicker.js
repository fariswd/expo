import { UnavailabilityError } from 'expo-errors';
import ExponentImagePicker from './ExponentImagePicker';
const MEDIA_TYPE_OPTIONS = {
    All: 'All',
    Videos: 'Videos',
    Images: 'Images',
};
export async function launchImageLibraryAsync(options = {}) {
    if (!ExponentImagePicker.launchImageLibraryAsync) {
        throw new UnavailabilityError('ImagePicker', 'launchImageLibraryAsync');
    }
    return ExponentImagePicker.launchImageLibraryAsync(options);
}
export async function launchCameraAsync(options = {}) {
    console.log("nie ma :(");
    if (!ExponentImagePicker.launchCameraAsync) {
        throw new UnavailabilityError('ImagePicker', 'launchCameraAsync');
    }
    return ExponentImagePicker.launchCameraAsync(options);
}
export const MediaTypeOptions = MEDIA_TYPE_OPTIONS;
//# sourceMappingURL=ImagePicker.js.map