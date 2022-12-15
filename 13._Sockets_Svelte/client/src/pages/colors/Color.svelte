<script>
    import io from "socket.io-client";

    let colorValue = "#000000"

    const socket = io("http://127.0.0.1:8080");

    socket.on("update the color", (data) => {
        document.body.style.backgroundColor = data.data;
    });

    function sendColor() {
        socket.emit("client choose a new color", { data: colorValue });
    }
    
</script>


<input type="color">
<button>Send color</button>