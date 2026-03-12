<?php
// enquiries.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!empty($data['name']) && !empty($data['phone']) && !empty($data['city'])) {
        try {
            // Database file will be created in the same directory
            $db = new PDO('sqlite:enquiries.db');
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $db->exec("CREATE TABLE IF NOT EXISTS enquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                phone TEXT,
                city TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )");

            $stmt = $db->prepare("INSERT INTO enquiries (name, phone, city) VALUES (:name, :phone, :city)");
            $stmt->bindParam(':name', $data['name']);
            $stmt->bindParam(':phone', $data['phone']);
            $stmt->bindParam(':city', $data['city']);
            $stmt->execute();

            echo json_encode(["message" => "Enquiry saved successfully"]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "Database error: " . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "All fields are required"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
