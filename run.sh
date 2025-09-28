echo "*****************************"
echo "* Building container image *"
echo "*****************************"
echo ""

docker build -t ui-chatbot .

echo "*****************************"
echo "* Running ui-chatbot container on port 8082 *"
echo "*****************************"
echo ""

docker run -d -p 8082:80 --name ui-chatbot ui-chatbot

echo "*************************************"
echo "✅ Container is up and running, at http://localhost:8082"
echo "*************************************"
echo ""

if [ "$1" != "no-pause" ]; then
    read -p "Press any button to exit..."
fi
