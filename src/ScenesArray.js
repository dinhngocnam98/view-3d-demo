
import React from 'react';
import ThreeJSModal from "./threeJSModal";

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
const description = '<h1>Phòng Truyền thống bộ công an</h1>\n' +
    '\n' +
    '    <p><strong>Chi tiết vật thể</strong> Ở đây miêu tả vật thể.</p>\n' +
    '\n' +
    '\n' +
    '    <h2>Địa chỉ</h2>\n'
const markerLighthouse = {
    id: "marker-1",
    image: baseUrl + "pictos/pin-red.png",
    tooltip: "Cape Florida Light, Key Biscayne",
    size: { width: 32, height: 32 },
    anchor: "bottom center",
    gps: [-80.155973, 25.666601, 29 + 3],
};
var scenesArray = [
    {
        id: 1,
        sceneImg: 'museum2.jpg',
        nodes: [
            {
                id: '1',
                panorama: 'museum2.jpg',
                thumbnail: 'museum2.jpg',
                name: 'Phòng trưng bày số 1',
                caption: `[1] Phòng trưng bày số 1`,
                markers: [
                    {
                        // image marker that opens the panel when clicked
                        id: "image",
                        position: { textureX: 210, textureY: 950 },
                        image: "pin-blue.png",
                        anchor: "bottom center",
                        size: { width: 32, height: 32 },
                        tooltip: "Demo <b>Ấn để xem chi tiết!</b>",
                    },
                ],
                links: [
                    { nodeId: '2', position: { textureX: 2760, textureY: 920 } },
                    { nodeId: '3', position: { textureX: 1360, textureY: 920 } }
                ]
            },
            {
                id: '2',
                panorama: 'museum3.jpg',
                thumbnail: 'museum3.jpg',
                name: 'Tủ trưng bày',
                caption: `[2] Tủ trưng bày`,
                links: [
                    { nodeId: '1', position: { textureX: 2950, textureY: 820 } }
                ]
            },
            {
                id: '3',
                panorama: 'museum1.jpg',
                thumbnail: 'museum1.jpg',
                name: 'Phòng trưng bày số 2',
                caption: `[2] Phòng trưng bày số 2`,
                links: [
                    { nodeId: '1', position: { textureX: 3080, textureY: 880 } }
                ]
            },
        ],
        markers: [
            {
                // image marker that opens the panel when clicked
                id: "image",
                position: { yaw: "0.33deg", pitch: "0.1deg" },
                image: "pin-blue.png",
                anchor: "bottom center",
                size: { width: 32, height: 32 },
                tooltip: "Mountain peak. <b>Click me!</b>"
            },
        ]
    }
];

export default scenesArray;
