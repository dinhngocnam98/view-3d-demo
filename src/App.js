import {
    ReactPhotoSphereViewer,
    MarkersPlugin, VirtualTourPlugin, GalleryPlugin,
} from "react-photo-sphere-viewer";
import React, {useState} from "react";
import scenesArray from "./ScenesArray";
import ThreeJSModal from "./threeJSModal";
// import 'react-photo-sphere-viewer/dist/style.css';

function App() {
    const [currentScene, setCurrentScene] = useState(0);
    const [sceneImg, setSceneImg] = useState(scenesArray[currentScene].sceneImg);
    const [currentNode, setCurrentNode] = useState();
    const [isOpenModel,setIsOpenModel] = useState(false);
    const [plugins, setPlugins] = useState([
        [MarkersPlugin,
            {
                markers: currentNode ? currentNode.markers : [],
            }
        ],
        [
            GalleryPlugin,
            {
                hideOnClick: true,
                items: scenesArray[currentScene].nodes,
                thumbnailSize: { width: 100, height: 100 },
            },
        ],
        [
            VirtualTourPlugin,
            {
                renderMode: 'markers',
                nodes: scenesArray[currentScene].nodes
            }
        ],
    ])
    const navbar = [
        'autorotate',
        'zoom',
        'move',
        'gallery',
        'markers',
        'markersList',
        'caption',
        'description',
        'download',
        'fullscreen',
    ]
    const pSRef = React.createRef();

    const handleReady = (instance) => {
        const virtualTourPlugin = instance.getPlugin(VirtualTourPlugin);
        if (!virtualTourPlugin) return;
        // const currentNode = virtualTourPlugin.getCurrentNode();
        setCurrentNode(virtualTourPlugin.state.currentNode)
        const markersPlugin = instance.getPlugin(MarkersPlugin);
        if (!markersPlugin) return;
        markersPlugin.addEventListener('select-marker', ({marker}) => {
            if(marker.id === 'image'){
                setIsOpenModel(true)
            }
        })
        // const currentNode = virtualTourPlugin.getCurrentNode();
        // console.log(currentNode)
    };
    const handleClick = (data) => {
        console.log(data);
    };

    return (
        <div className="App">
            <div>
                <ReactPhotoSphereViewer
                    ref={pSRef}
                    src='Test_Pano.jpg'
                    height={"100vh"}
                    width={"100%"}
                    navbar={navbar}
                    littlePlanet={false}
                    onClick={handleClick}
                    onReady={handleReady}
                    plugins={plugins}
                ></ReactPhotoSphereViewer>
            </div>
            <div style={isOpenModel ? styles.model3DOpen : styles.model3DClose}>
                <ThreeJSModal />
            </div>

        </div>
    );
}

const styles = {
    model3DOpen: {
        position: "absolute",
        zIndex: 80,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh"
    },
    model3DClose: {
        position: "absolute",
        zIndex: 999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: 'none'
    }
}

export default App;
