const data = await response.json()
console.log(data)
if (!response.ok) {
  throw new Error(data.error || "Failed to generate newsletter")
}

// Structure the data to match what the frontend expects
const newsletterData = {
  id: data.data.id,
  prompt: topic,
  response: data.data.choices[0].message.content,
  citations: data.data.citations
}

// Call the onGenerate callback with the structured newsletter data
onGenerate(newsletterData)

toast({
// ... existing code ...
}) 