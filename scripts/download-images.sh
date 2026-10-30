#!/usr/bin/env bash
# Downloads the IRON PULSE photography (generated in the Figma file) into public/images.
# The Figma-hosted URLs expire 7 days after generation — if a download fails, open the
# Figma file, select an image, and use Export (or right-click > Copy/Paste as PNG) instead,
# saving it under the same file name.
set -e
cd "$(dirname "$0")/../public/images"
get() { echo "-> $1"; curl -f -L -o "$1" "https://www.figma.com/api/mcp/asset/$2.jpg"; }
get hero.jpg        0b853b61-ceb6-4820-8440-fd3ad50cf00b
get strength.jpg    abe99166-3faf-4830-b883-989734f2c8f4
get weights.jpg     8039c779-e922-48ee-ac63-fe7f0011fc4e
get cardio.jpg      a914e42e-9762-48f8-a461-744bd1e7f076
get personal.jpg    306362bb-94e5-402c-a027-c65e29d6403a
get functional.jpg  184e454d-5b71-44cd-a896-71d83c4d7a48
get trainer-marcus.jpg 280246cb-dda1-4851-8a83-985d50fa13b5
get trainer-lena.jpg   2c2c801c-de7d-42bb-b3f7-3c8dc335b523
get trainer-darius.jpg 1475b105-7247-4394-b798-77926acba7e7
get trainer-nora.jpg   0975d067-1d95-46db-acbf-349df718c3a5
get gym.jpg         f2aaaa43-8344-42f9-88a4-40a5ee19bbfc
echo "Done."
