# Specification

## Summary
**Goal:** Rename the Fleet entry currently labeled “Toyota Coaster 4C” to “Toyota Coaster Saloon 4C” and switch its card image to a dedicated Saloon 4C asset.

**Planned changes:**
- Update the corresponding fleet data entry for the selected “Toyota Coaster 4C” card to use the name exactly “Toyota Coaster Saloon 4C”.
- Add a new static image under `frontend/public/assets/generated` for the Saloon 4C and update the fleet entry to reference it via `/assets/generated/...` (not reusing the existing Coaster 4C image).
- Ensure the Fleet card `<img>` alt text and the booking form “Select Car” dropdown reflect the updated `vehicle.name`.

**User-visible outcome:** In the Fleet section (Group & Commercial Transport) and in the booking “Select Car” dropdown, users see “Toyota Coaster Saloon 4C” with its own dedicated Saloon 4C image.
